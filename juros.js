import entradaDados from 'readline-sync';

let salarioMinimo = [
    { ano: 2010, salario: 510.00 },
    { ano: 2011, salario: 545.00 },
    { ano: 2012, salario: 622.00 },
    { ano: 2013, salario: 678.00 },
    { ano: 2014, salario: 724.00 },
    { ano: 2015, salario: 788.00 },
    { ano: 2016, salario: 880.00 },
    { ano: 2017, salario: 937.00 },
    { ano: 2018, salario: 954.00 },
    { ano: 2019, salario: 998.00 },
    { ano: 2020, salario: 1045.00 },
    { ano: 2021, salario: 1100.00 },
    { ano: 2022, salario: 1212.00 }
];

let inflacao = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.50 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },
    { ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 },
    { ano: 2021, ipca: 10.06 },
    { ano: 2022, ipca: 6.50 }
];

console.log(`Escolha uma das alternativas:

1 - Listar os salários mínimos de 2010 à 2022
2 - Listar o índice IPCA de 2010 à 2022
3 - Comparação entre o percentual de aumento salarial e o IPCA
`);

let escolha = entradaDados.question('Digite o numero da sua escolha: ');
escolha = Number(escolha);

if (escolha > 3 || escolha <= 0) {
    console.log(`
Opção Inválida!`);
} else {
    switch (escolha) {
        case 1:
            for (let dados of salarioMinimo) {
                let labelAno = "Ano:";
                let ano = dados.ano;
                let labelSalario = "Salário Mínimo:";
                let salario = dados.salario.toFixed(2).replace(".", ",");
                console.log("\n\n" + labelAno.padEnd(30, ".") + ano);
                console.log(labelSalario.padEnd(30, ".") + "R$ " + salario);
            };
            break;

        case 2:
            for (let dados of inflacao) {
                let labelAno = "Ano:";
                let ano = dados.ano;
                let labelIpca = "Inflação IPCA:";
                let ipca = dados.ipca.toFixed(2).replace(".", ",");
                console.log("\n\n" + labelAno.padEnd(30, ".") + ano);
                console.log(labelIpca.padEnd(30, ".") + ipca + "%");
            };
            break;

        case 3:

            let salarioAnterior = salarioMinimo[0].salario;

            for (let i = 0; i < salarioMinimo.length; i++) {
                let labelAno = "Ano:";
                let labelSalario = "Salário Mínimo:";
                let labelCrescimentoSalarial = "Crescimento Salarial:";
                let labelIpca = "Inflação IPCA:";

                let ano = salarioMinimo[i].ano;
                let salario = salarioMinimo[i].salario;
                let ipca = inflacao[i].ipca.toFixed(2).replace(".", ",");

                let diferencaSalarial = salario - salarioAnterior;
                let crescimentoSalarial = ((diferencaSalarial / salarioAnterior) * 100).toFixed(2).replace(".", ",");
                crescimentoSalarial += "%";

                if (ano != 2010) {
                    salarioAnterior = salario;
                } else {
                    crescimentoSalarial = "-";
                };

                console.log("\n\n" + `${labelAno.padEnd(30, ".")}${ano}`);
                console.log(`${labelSalario.padEnd(30, ".")}R$ ${salario.toFixed(2).replace(".", ",")}`);
                console.log(`${labelCrescimentoSalarial.padEnd(30, ".")}${crescimentoSalarial}`);
                console.log(`${labelIpca.padEnd(30, ".")}${ipca}%`);
            };
            break;

        default:

            console.log(`
Opção Inválida!`);
            break;
    };
};