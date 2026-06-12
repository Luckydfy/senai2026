#!/bin/bash
cd "$(dirname "$0")/../.."
echo "Limpando tabela histórica e realizando carga limpa do CSV..."
npm run import:csv:clear