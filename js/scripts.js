// número
console.log(typeof 2 + " Resultado de 2");
console.log(typeof 5.14 + " Resultado de 5.14");
console.log(typeof -127 + " Resultado de -127");
console.log(4);
console.log(7);

// operadores aritiméticos
console.log(2+4 + " Resultado de 2+4");
console.log(10-5 + " Resultado de 10-5");
console.log(3+5/(2*2) + " Resultado de 3+5/(2*2)");

// números especiais
console.log(typeof Infinity + " Resultado de Infinity");
console.log(typeof -Infinity + " Resultado de -Infinity");
console.log(typeof 2 * "abc" + " Resultado de 2 * abc");
console.log(typeof NaN + " Resultado de NaN");

// strings
console.log("Um texto");
console.log(`Outro texto`);
console.log(`12`);
console.log(typeof "Um texto" +  " Resultado de `Um texto`");
console.log(typeof `Outro texto` + ` Resultado de "Outro texto"`);
console.log(typeof `12` + " Resultado de `12`");

// símbolos especiais em strings
console.log("Testando a \n quebra de linha");
console.log("Testando a \t TAB");

// concatenação
console.log("oi," + " tudo" + " bem?")
console.log(`Testando ` + `com` + ` crase!`);

// interpolação - template strings
console.log(`A soma de 2 + 2 é ${2 + 2}`)

// boolean
console.log(true);
console.log(`5 > 20 é ${5 >20}`);
console.log(`30 > 10 é ${30>10}`);
console.log(typeof true);

// comparações
console.log(`5 <= 5 é ${5 <= 5}`);
console.log(`5 < 5 é ${5<5}`);
console.log(`10 == 10 é ${10==10}`);
console.log(`10 == 9 é ${10==9}`);
console.log(`10 != 10 é ${10!=10}`);
console.log(`10 != 9 é ${10!=9}`);

// idêntico
console.log(`10 === 10 é ${10===10}`);
console.log(`10 === "10" é ${10==="10"}`);
console.log(`10 == "10" é ${10=="10"}`);
console.log(`10 !== "10" é ${10!=="10"}`);
console.log(`10 != "10" é ${10!="10"}`);

// operadores lógicos
console.log(`10 === 10 && 3 == 3 é ${10===10 && 3==3}`);
console.log(`10 === 10 || 3 == 3 é ${10===10 || 3==3}`);
console.log(`10 === 10 && !3 == 3 é ${10===10 && !3==3}`);
console.log(`10 === 10 || !3 == 3 é ${10===10 || !3==3}`);

// valores vasios
console.log(typeof null + " Resultado de null", typeof undefined + " Resultado de undefined");
console.log(`null === undefined é ${null === undefined}`);
console.log(`null == undefined é ${undefined == null}`);
console.log(`null == false é ${null == false}`);
console.log(`undefined == false é ${null == false}`);

// mudança de tipo de dado
console.log(`5 * null é ${5 * null}`, "e tipo " + typeof(5*null));
console.log(`"teste" * "opa" é ${"teste" * "opa"}`, "e tipo " + typeof("teste" * "opa"));
console.log(`"10" + 1 é ${"10" + 1}`, "e tipo " + typeof("10" + 1));
console.log(`"10" - 1 é ${"10" - 1}`, "e tipo " + typeof("10" - 1));
