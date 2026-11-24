import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Partículas estelares/mágicas neutras que flutuam suavemente
function ParticulaEstelar({ cor, simbolo, esquerda, atraso, tamanho }) {
  const progresso = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.delay(atraso),
        Animated.timing(progresso, {
          toValue: 1,
          duration: 2800,
          easing: Easing.out(Easing.quad),
          useNativeDriver: false,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [atraso, progresso]);

  const bottom = progresso.interpolate({
    inputRange: [0, 1],
    outputRange: [12, 220],
  });

  const opacity = progresso.interpolate({
    inputRange: [0, 0.25, 0.75, 1],
    outputRange: [0, 0.9, 0.75, 0],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        left: esquerda,
        bottom,
        opacity,
        zIndex: 20,
      }}
    >
      <Text
        style={{
          color: cor,
          fontSize: tamanho,
          fontWeight: 'bold',
          ...(Platform.OS === 'web' && {
            textShadow: `0 0 8px ${cor}`,
          }),
        }}
      >
        {simbolo}
      </Text>
    </Animated.View>
  );
}

function HeroCard({ item, larguraCard }) {
  const nivelForca = Math.min(Number(item.forca) || 0, 100);
  const [hover, setHover] = useState(false);

  const flashAnim = useRef(new Animated.Value(0)).current;
  const ondaAnim = useRef(new Animated.Value(0)).current;

  // Dispara uma aura cósmica/dourada ao clicar no card
  const dispararAura = () => {
    flashAnim.setValue(0.75);
    ondaAnim.setValue(0);

    Animated.parallel([
      Animated.timing(flashAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }),
      Animated.timing(ondaAnim, {
        toValue: 1,
        duration: 650,
        easing: Easing.out(Easing.quad),
        useNativeDriver: false,
      }),
    ]).start();
  };

  const escalaOnda = ondaAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 2.2],
  });

  const opacidadeOnda = ondaAnim.interpolate({
    inputRange: [0, 0.3, 1],
    outputRange: [0, 0.75, 0],
  });

  const listaHabilidades = item.habilidade
    ? String(item.habilidade).split(',').map((h) => h.trim()).filter(Boolean)
    : [];

  return (
    <Pressable
      onPress={dispararAura}
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      style={[
        styles.card,
        {
          width: larguraCard,
          borderColor: hover ? '#FBBF24' : 'rgba(168, 85, 247, 0.45)',
        },
        Platform.OS === 'web' && {
          transition: 'all 0.28s ease',
          cursor: 'pointer',
          transform: hover ? 'translateY(-8px) scale(1.01)' : 'translateY(0px) scale(1)',
          boxShadow: hover
            ? '0 14px 34px rgba(168, 85, 247, 0.45), 0 0 18px rgba(251, 191, 36, 0.35)'
            : '0 8px 24px rgba(0, 0, 0, 0.55)',
        },
      ]}
    >
      {/* Linha superior em degradê cósmico (violeta -> dourado) */}
      <View
        style={{
          height: 4,
          width: '100%',
          backgroundColor: '#A855F7',
          ...(Platform.OS === 'web' && {
            backgroundImage: 'linear-gradient(90deg, #7C3AED, #FBBF24, #7C3AED)',
          }),
        }}
      />

      {/* Área da Imagem com enquadramento no topo */}
      <View style={styles.imagemWrapper}>
        {item.foto ? (
          <Image
            source={{ uri: item.foto }}
            resizeMode="cover"
            style={[
              styles.imagem,
              Platform.OS === 'web' && {
                objectFit: 'cover',
                objectPosition: 'center top',
                transition: 'transform 0.35s ease',
                transform: hover ? 'scale(1.06)' : 'scale(1)',
              },
            ]}
          />
        ) : (
          <View style={[styles.imagem, styles.semImagem]}>
            <Text style={styles.semImagemSimbolo}>✦</Text>
            <Text style={styles.semImagemTexto}>RETRATO OCULTO</Text>
          </View>
        )}

        {/* Partículas mágicas sutis (dourado e lilás) */}
        <ParticulaEstelar cor="#FDE68A" simbolo="✦" esquerda="15%" atraso={0} tamanho={14} />
        <ParticulaEstelar cor="#D8B4FE" simbolo="✧" esquerda="52%" atraso={800} tamanho={15} />
        <ParticulaEstelar cor="#FBBF24" simbolo="⋆" esquerda="82%" atraso={1500} tamanho={14} />

        {/* Onda de energia mágica ao clicar */}
        <Animated.View
          pointerEvents="none"
          style={[
            styles.ondaPoder,
            {
              opacity: opacidadeOnda,
              transform: [{ scale: escalaOnda }],
            },
          ]}
        />

        {/* Clarão estelar ao clicar */}
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: '#FDE68A',
              opacity: flashAnim,
              zIndex: 25,
            },
          ]}
        />

        {/* Selo de Força */}
        <View style={styles.badgeFlutuante}>
          <Text style={styles.badgeTexto}>⚡ {item.forca}</Text>
        </View>
      </View>

      <View style={styles.cardConteudo}>
        <Text style={styles.nome} numberOfLines={1}>
          {item.nome}
        </Text>

        {/* Barra de Poder */}
        <View style={styles.barraFundo}>
          <View
            style={[
              styles.barraProgresso,
              { width: `${nivelForca}%` },
              Platform.OS === 'web' && {
                backgroundImage: 'linear-gradient(90deg, #8B5CF6, #FBBF24)',
                boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)',
              },
            ]}
          />
        </View>

        <Text style={styles.labelHabilidade}>✧ HABILIDADES</Text>

        {listaHabilidades.length > 1 ? (
          <View style={styles.tagsContainer}>
            {listaHabilidades.map((hab, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagTexto}>{hab}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.textoHabilidade}>{item.habilidade}</Text>
        )}
      </View>
    </Pressable>
  );
}

export default function Home() {
  const [herois, setHerois] = useState([]);
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  const { width } = useWindowDimensions();

  const larguraContainer = Math.min(width - 32, 1160);
  const gap = 20;
  let larguraCard = larguraContainer;
  if (width >= 1024) {
    larguraCard = (larguraContainer - gap * 2) / 3;
  } else if (width >= 650) {
    larguraCard = (larguraContainer - gap) / 2;
  }

  const carregaHeroes = async () => {
    try {
      setCarregando(true);
      setErro(null);

      const response = await fetch('https://superheroes-api-one.vercel.app/api/herois');
      if (!response.ok) {
        throw new Error('Erro ao invocar os heróis');
      }

      const data = await response.json();
      const lista = Array.isArray(data) ? data : data?.herois || [];
      setHerois(lista);
    } catch (e) {
      setErro(e.message || 'Falha na conexão arcana');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregaHeroes();
  }, []);

  const heroisFiltrados = herois.filter((h) => {
    const termo = busca.toLowerCase();
    return (
      h.nome?.toLowerCase().includes(termo) ||
      h.habilidade?.toLowerCase().includes(termo)
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#090514" />

      {/* Cabeçalho Místico */}
      <View
        style={[
          styles.header,
          Platform.OS === 'web' && {
            backgroundImage: 'radial-gradient(circle at top, #24124D 0%, #0E0821 100%)',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.25)',
          },
        ]}
      >
        <ParticulaEstelar cor="#FBBF24" simbolo="✦" esquerda="15%" atraso={100} tamanho={15} />
        <ParticulaEstelar cor="#C084FC" simbolo="✧" esquerda="82%" atraso={800} tamanho={17} />

        <View style={styles.headerInner}>
          <Text style={styles.runasTopo}>✦ ─── GRIMÓRIO CÓSMICO ─── ✦</Text>
          <Text
            style={[
              styles.titulo,
              Platform.OS === 'web' && {
                textShadow: '0 0 24px rgba(192, 132, 252, 0.85)',
              },
            ]}
          >
            PANTEÃO DOS HERÓIS
          </Text>
          <Text style={styles.descricaoHeader}>
            Explore as lendas, seus níveis de força e habilidades especiais
          </Text>

          <View style={styles.buscaContainer}>
            <Text style={styles.iconeBusca}>✧</Text>
            <TextInput
              style={[
                styles.inputBusca,
                Platform.OS === 'web' && { outlineStyle: 'none' },
              ]}
              placeholder="Buscar por nome ou habilidade..."
              placeholderTextColor="#7C6F9F"
              value={busca}
              onChangeText={setBusca}
            />
            {busca.length > 0 && (
              <TouchableOpacity onPress={() => setBusca('')} style={styles.botaoLimpar}>
                <Text style={styles.textoLimpar}>✕</Text>
              </TouchableOpacity>
            )}
          </View>

          {!carregando && !erro && (
            <Text style={styles.contador}>
              ✦ {heroisFiltrados.length} de {herois.length} lendas reveladas
            </Text>
          )}
        </View>
      </View>

      {carregando && (
        <View style={styles.centro}>
          <ActivityIndicator size="large" color="#C084FC" />
          <Text style={styles.textoStatus}>Abrindo o portal dos heróis...</Text>
        </View>
      )}

      {erro && (
        <View style={styles.centro}>
          <Text style={styles.textoErro}>✦ {erro}</Text>
          <TouchableOpacity style={styles.botaoRetry} onPress={carregaHeroes}>
            <Text style={styles.textoBotao}>TENTAR NOVAMENTE</Text>
          </TouchableOpacity>
        </View>
      )}

      {!carregando && !erro && heroisFiltrados.length === 0 && (
        <View style={styles.centro}>
          <Text style={styles.textoStatus}>Nenhum herói encontrado.</Text>
        </View>
      )}

      {!carregando && !erro && (
        <ScrollView contentContainerStyle={styles.scrollConteudo} showsVerticalScrollIndicator={false}>
          <View style={[styles.gridContainer, { width: larguraContainer, gap }]}>
            {heroisFiltrados.map((item) => (
              <HeroCard key={String(item.id)} item={item} larguraCard={larguraCard} />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090514',
  },
  header: {
    paddingVertical: 26,
    paddingHorizontal: 20,
    backgroundColor: '#120B29',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(168, 85, 247, 0.45)',
    overflow: 'hidden',
  },
  headerInner: {
    maxWidth: 1140,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  runasTopo: {
    color: '#FBBF24',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 6,
  },
  titulo: {
    color: '#F5F3FF',
    fontSize: 32,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
  },
  descricaoHeader: {
    color: '#A78BFA',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 18,
    textAlign: 'center',
  },
  buscaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#090514',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#6D28D9',
    paddingHorizontal: 18,
    width: '100%',
    maxWidth: 540,
  },
  iconeBusca: {
    color: '#FBBF24',
    fontSize: 16,
    marginRight: 10,
  },
  inputBusca: {
    flex: 1,
    color: '#F5F3FF',
    fontSize: 15,
    paddingVertical: 12,
  },
  botaoLimpar: {
    padding: 6,
  },
  textoLimpar: {
    color: '#A78BFA',
    fontSize: 15,
    fontWeight: 'bold',
  },
  contador: {
    color: '#A78BFA',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 12,
  },
  scrollConteudo: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#130C2E',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.5,
  },
  imagemWrapper: {
    width: '100%',
    height: 250,
    backgroundColor: '#090514',
    overflow: 'hidden',
    position: 'relative',
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  semImagem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  semImagemSimbolo: {
    fontSize: 36,
    color: '#A855F7',
  },
  semImagemTexto: {
    color: '#A855F7',
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 2,
    marginTop: 6,
  },
  ondaPoder: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: '50%',
    height: '50%',
    borderRadius: 999,
    borderWidth: 3,
    borderColor: '#FBBF24',
    backgroundColor: 'rgba(168, 85, 247, 0.35)',
    zIndex: 22,
  },
  badgeFlutuante: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(9, 5, 20, 0.85)',
    borderWidth: 1,
    borderColor: '#FBBF24',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
    zIndex: 15,
  },
  badgeTexto: {
    color: '#FDE68A',
    fontWeight: '900',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  cardConteudo: {
    padding: 18,
    flex: 1,
  },
  nome: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  barraFundo: {
    height: 6,
    backgroundColor: '#090514',
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    marginBottom: 14,
  },
  barraProgresso: {
    height: '100%',
    backgroundColor: '#A855F7',
    borderRadius: 999,
  },
  labelHabilidade: {
    color: '#FBBF24',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.45)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagTexto: {
    color: '#F8FAFC',
    fontSize: 13,
    fontWeight: '600',
  },
  textoHabilidade: {
    color: '#DDD6FE',
    fontSize: 14,
    lineHeight: 21,
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textoStatus: {
    color: '#C4B5FD',
    fontSize: 16,
    marginTop: 14,
    fontWeight: '600',
  },
  textoErro: {
    color: '#FDA4AF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
  botaoRetry: {
    backgroundColor: '#7C3AED',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#C084FC',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: '800',
    letterSpacing: 1.2,
  },
});