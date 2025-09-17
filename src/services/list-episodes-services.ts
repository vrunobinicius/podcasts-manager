export const serviceListEpisodes = async () => {

    const data = [
        {
            podcastName: "podcast",
            videoId: "123",
            cover: "image.png",
            categories: ["A", "B", "C"],
        },
        {
            podcastName: "podcast 2",
            videoId: "456",
            cover: "image2.png",
            categories: ["D", "E", "F"],
        },
        {
            podcastName: "podcast 3",
            videoId: "456",
            cover: "image2.png",
            categories: ["D", "E", "F"],
        }
    ];

    return data;

}