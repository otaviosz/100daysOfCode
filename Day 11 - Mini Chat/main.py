import os

mensagens = []

nome = input('Nome: ')

while True:

  os.system('cls')

  if len(mensagens) > 0:
    for m in mensagens:
      print(m['nome'], '-', m['texto'])

  print("________________")

  #obter texto
  texto = input('mensagem: ')
  if texto == 'fim':
    break

  mensagens.append({
    "nome": nome,
    "texto": texto
  })
  
# python main.py para rodar
# digite fim para sair