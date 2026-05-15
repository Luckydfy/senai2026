select * from leituras;

select l.temperature_c, l.humidity_pct from public.leituras l;

select  l.timestamp,
		l.temperature_c,
		l.humidity_pct 
from public.leituras l
order by l.timestamp;