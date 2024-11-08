use extism_pdk::*;
use mlua::{chunk, FromLua, Function, Lua, MetaMethod, Result, UserData, UserDataMethods, Value, Variadic};

#[plugin_fn]
pub fn lua(code: String) -> FnResult<String> {
    let lua = Lua::new();
    let result = lua.load("1 + 1").eval::<String>()?,
    Ok(result.unwrap().to_string())
}