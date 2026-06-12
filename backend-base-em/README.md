# Backend Base EM - Telemetria Ambiental Estacional

Este projeto consiste em um ecossistema completo de uma API RESTful de nível profissional, desenvolvida para gerenciar dados de monitoramento e telemetria ambiental em tempo real capturados de estações meteorológicas integradas em campo.

## O que é uma API RESTful?
RESTful descreve um serviço web que implementa de forma padronizada os princípios da arquitetura REST (Representational State Transfer). Isso significa que ela utiliza métodos HTTP nativos de forma semântica (`GET` para leitura, `POST` para criação, `PUT` para atualização total, `DELETE` para remoção), utiliza URIs lógicas para identificação única de recursos, e trafega respostas limpas no formato JSON acompanhadas de códigos de status oficiais para governança.

## O que é a Arquitetura em N-Camadas?
A arquitetura em n-camadas divide a aplicação em seções lógicas independentes com responsabilidades de escopo bem delineadas. Essa segregação isola o acoplamento de código, facilitando testes, manutenções e escalabilidade. O fluxo estrutural de processamento segue rigorosamente a hierarquia abaixo:

```text
Cliente HTTP ──> Routes ──> Controller ──> Service ──> DTO ──> Repository ──> Model ──> PostgreSQL