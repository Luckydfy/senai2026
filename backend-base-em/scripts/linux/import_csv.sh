#!/bin/bash
cd "$(dirname "$0")/../.."
echo "Executando importação incremental dos dados contidos no arquivo CSV..."
npm run import:csv