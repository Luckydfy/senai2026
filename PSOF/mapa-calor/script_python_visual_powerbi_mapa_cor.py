import pandas as pd
import matplotlib.pyplot as plt

# O Power BI fornece os dados no DataFrame chamado dataset
df = dataset.copy()

# Espera-se receber pelo menos estas colunas:
# bairro, latitude, longitude, temperatura_c

resumo = (
    df.groupby(["bairro", "latitude", "longitude"], as_index=False)
      .agg(temperatura_media_c=("temperatura_c", "mean"))
)

plt.figure(figsize=(10, 8))
sc = plt.scatter(
    resumo["longitude"],
    resumo["latitude"],
    c=resumo["temperatura_media_c"],
    s=260,
    alpha=0.9
)

for _, row in resumo.iterrows():
    plt.annotate(
        row["bairro"],
        (row["longitude"], row["latitude"]),
        xytext=(4, 4),
        textcoords="offset points",
        fontsize=8
    )

plt.colorbar(sc, label="Temperatura média (°C)")
plt.xlabel("Longitude")
plt.ylabel("Latitude")
plt.title("Mapa de cor por bairro - Mirandópolis/SP")
plt.grid(True, alpha=0.25)
plt.tight_layout()
plt.show()
