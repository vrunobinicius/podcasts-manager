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

GET: RETONRA EM UMA API REST (JSON) DE DADOS DE PODCASTS PARA ALIMENTAR UM FRONTEND

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



