#!/bin/bash
echo "Starting LocalTunnel for Simulado..."
echo "Open http://localhost:3000 first!"
echo ""
npx lt --port 3000 --subdomain simulados-fabrica --local-host 127.0.0.1
