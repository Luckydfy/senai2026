-- Estrutura de produção mapeada pelo Sequelize ORM
CREATE TABLE public.leituras (
    id serial4 NOT NULL,
    station_id varchar(255) NOT NULL,
    "timestamp" timestamptz NOT NULL,
    temperature_c float8 NOT NULL,
    humidity_pct float8 NOT NULL,
    CONSTRAINT leituras_pkey PRIMARY KEY (id)
);