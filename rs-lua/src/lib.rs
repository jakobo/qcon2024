use extism_pdk::*;
use mlua::*;

#[plugin_fn]
pub fn execLua(code: String) -> FnResult<String> {
    let lua = Lua::new();
    let result = lua.load(code).eval::<String>()?,
    Ok(result.unwrap().to_string())
}