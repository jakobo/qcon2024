package main

import "github.com/extism/go-pdk"
import "github.com/Shopify/go-lua"


//export execLua
func execLua() int32 {
	input := pdk.Input()
	output := ""

	l := lua.NewState()
  lua.OpenLibraries(l)

	lua.DoString(l, "function sandbox() " + input + " end")
	l.Global("sandbox")
	l.ProtectedCall(0, 1, 0)
	myRet, errRet := l.ToString(-1)
	pdx.OutputString(myRet)
	return 0
}

func main() {}