const validation = new JustValidate('#form');

validation
  .addField('#nome-completo', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxlength',
      value: 50,
    },
  ])
  .addField('#textWhy', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxlength',
      value: 500,
    },
])
.addField('#data-viagem', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
]);