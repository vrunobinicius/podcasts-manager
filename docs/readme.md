# PODCAST MANAGER — API

### Descrição:

API PARA FILTRAR EM SESSÕES VIDEOS DE CANAIS DE PODCASTAS NO YOUTUBE.

### Dominio:

PODCASTS EM VIDEOS DO YOUTUBE

### Features:

— FILTRAR OS EPISÓDIOS EM SESSÕES DE CATEGORIAS. EX.: [saúde, fitness, mentalidade, humor] <br>
— FILTRAR PODCASTAS POR NOMES DE CANAIS <br>

## Desenvolvimento

### Feature:

LISTAR OS EPISÓDIOS DOS PODCASTS EM SESSÕES DE CAATEGORIAS

### Implementação:

GET: RETONRA UMA LISTA (JSON) DE DADOS DE PODCASTS PARA ALIMENTAR UM FRONTEND.

GET: RETONRA UMA LISTA DE EPISÓDIOS (JSON) DE PODCASTS, BASEADO EM UM PARAMENTRO SOLICITADO PELO CLIENT.

    ```json
        [
            {
                "podcastName": "podcast",
                "videoId": "123",
                "cover": "image.png",
                "categories": ["A", "B", "C"],
            }
        ] 
    ```




