# MediApp 🩺💊

Bem-vindo ao **MediApp**! Este é um sistema simples para gerenciamento de consultas, médicos, pacientes e prescrições. Feito com Node.js e Express para facilitar o controle de informações médicas. 

## Funcionalidades 🚀
- Cadastro e gerenciamento de **Médicos** 👨‍⚕️👩‍⚕️
- Cadastro e gerenciamento de **Pacientes** 🧑‍🦱👩‍🦰
- Agendamento de **Consultas** 📅
- Emissão de **Prescrições** 📝

## Estrutura do Projeto 🗂️
```
index.js
package.json
controllers/
  AppointmentController.js
  DoctorController.js
  PacientController.js
  PrescriptionController.js
models/
repositories/
  AppointmentRepository.js
  DoctorRepository.js
  PacientRepository.js
  PrescriptionRepository.js
routes/
  router.js
services/
  AppointmentService.js
  DoctorService.js
  PacientService.js
  PrescriptionService.js
```

## Como rodar o projeto ⚡
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   node index.js
   ```

## Commits padronizados 📝
Utilize o Commitizen para criar mensagens de commit padronizadas:
```bash
npx cz
```

## Contribuição 🤝
Sinta-se à vontade para abrir issues, enviar PRs ou sugerir melhorias!

---
Feito com ❤️ por Narciso Gomes
