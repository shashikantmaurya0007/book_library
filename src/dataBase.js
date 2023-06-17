export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/books") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              id: 1,
              image:
                "https://th.bing.com/th/id/R.a9c4892c4c37fe10969bf306b450bda6?rik=6PDFA%2fZsG8AZcg&riu=http%3a%2f%2fstatic3.wikia.nocookie.net%2f__cb20130708044319%2fdisney%2fimages%2f9%2f94%2fThe_jungle_book_classic_storybook.jpg&ehk=jnIRCzd8RUscXHmCCPjKy%2bxsDqo3CKYbZBKfKf1f%2bl8%3d&risl=&pid=ImgRaw&r=0",
              title: "The Jungle Book",
              writer: "Rudyard Kipling",
              rating: 9.3,
              year: 1994,
              category: "Read",
            },
            {
              id: 2,
              image:
                "https://c8.alamy.com/comp/ERHJE8/the-guide-a-novel-by-rk-narayan-published-by-methuen-london-1958-indian-ERHJE8.jpg",
              title: "THE GUIDE",
              writer: "RK Narayan",
              rating: 9.2,
              year: 1958,
              category: "Want to read",
            },
            {
              id: 3,
              image:
                "https://cdn.exoticindia.com/images/products/thumbnails/t800x600/books/rk_narayans_malgudi_days_volume_hindi_dvd_video_icl082.jpg",
              title: "Malgudi Days",
              writer: "RK Narayan",
              rating: 9.0,
              year: 1943,
              category: "Read",
            },
            {
              id: 4,
              image:
                "https://n1.sdlcdn.com/imgs/h/4/3/Godan-by-Premchand-SDL555028704-1-ce674.jpg",
              title: "Godan",
              writer: "Munshi Premchand",
              rating: 8.9,
              year: 1994,
              category: "Continue Reading",
            },
            {
              id: 5,
              image:
                "https://th.bing.com/th/id/OIP.LO1ikNMPo-7A7dfaTdhwuAHaLY?pid=ImgDet&rs=1",
              title: "The White Tiger",
              writer: "Arvind Adiga",
              rating: 8.5,
              year: 1994,
              category: "Continue Reading",
            },
            {
              id: 6,
              image:
                "https://th.bing.com/th/id/OIP.DTk8n6XeusoEni45olzApgAAAA?pid=ImgDet&rs=1",
              title: "A Suitable Boy",
              writer: "Vikram Seth",
              rating: 8.8,
              year: 2010,
              category: "Want to read",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Books not found.",
        });
      }
    }, 2000);
  });
};
