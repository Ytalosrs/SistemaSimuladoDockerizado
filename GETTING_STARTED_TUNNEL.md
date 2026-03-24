# 🌐 Guia de Acesso Externo via LocalTunnel

Este documento explica como expor o sistema local para acesso externo usando o **LocalTunnel**.

## 🛠️ Instalação das Dependências

As dependências já foram adicionadas ao `package.json`. Para garantir que tudo esteja instalado, rode:

```bash
npm install
```

---

## 🚀 Como Iniciar o Túnel

Siga estes passos na ordem:

1.  **Inicie o Sistema**: Certifique-se de que o sistema está rodando em `http://localhost:3000`.
2.  **Inicie o Túnel**:
    *   **Windows**: Dê um duplo clique no arquivo `tunnel.bat` ou rode `npm run tunnel`.
    *   **Linux/Mac**: Rode `./tunnel.sh` ou `npm run tunnel`.

3.  **Acesse a URL**: O terminal mostrará uma URL como:
    `https://simulados-fabrica.loca.lt`

---

## ⚠️ Observações Importantes

*   **PC Desligado / Terminal Fechado**: O túnel é uma conexão direta entre sua máquina e a internet. Se o computador for desligado ou o terminal for fechado, o túnel cairá e precisará ser reiniciado.
*   **Subdomínio Fixo**: O script tenta usar o subdomínio `simulados-fabrica`. Se ele for ocupado por outra pessoa, o LocalTunnel atribuirá uma URL aleatória temporária.
*   **Senha de Acesso (Bypass)**: Na primeira vez que acessar, o LocalTunnel pode pedir um IP. Você pode encontrar seu IP público em sites como `whatsmyip.com` para liberar o acesso inicial se solicitado pela página do LocalTunnel.

---

## 🐛 Solução de Problemas

Se o `npm run tunnel` falhar com a mensagem "The subdomain simulados-fabrica is already taken", isso pode indicar uma "ghost session" do LocalTunnel. Siga estes passos para resolver (para Windows):

1.  **Encontrar o processo travado:**
    ```powershell
    Get-WmiObject Win32_Process | Where-Object {$_.CommandLine -like "*localtunnel*"} | Select-Object ProcessId, CommandLine
    ```

2.  **Encerrar o processo:**
    ```powershell
    Stop-Process -Id [INSIRA_O_ID_AQUI] -Force
    ```

3.  **Aguardar:** Espere de 1 a 2 minutos para o servidor liberar o domínio antes de tentar `npm run tunnel` novamente.

---

## 📦 Scripts Disponíveis

| Script | Comando | Descrição |
| :--- | :--- | :--- |
| **npm run tunnel** | `lt --port 3000 --subdomain simulados-fabrica` | Comando oficial via Node.js |
| **tunnel.bat** | Duplo clique no Windows | Praticidade para quem não usa terminal |
| **tunnel.sh** | `./tunnel.sh` no Linux | Praticidade para ambientes Unix |
