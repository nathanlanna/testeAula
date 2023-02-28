function somar(a, b){
    return a+b
}

test("a operação somar funciona:", ()=>{
    const resultado = somar(3,5)

    expect(resultado).toEqual(8)
})