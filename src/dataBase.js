export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/movies") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              {
                id: 1,
                title: "The Jungle Book",
                writer: "Rudyard Kipling",
                rating: 9.3,
                year: 1994,
                category: "Read"
              },
              {
                id: 2,
                title: "THE GUIDE",
                writer: "RK Narayan",
                rating: 9.2,
                year: 1958,
                category: "Want to read"
              },
              {
                id: 3,
                title: "Malgudi Days",
                writer: "RK Narayan",
                rating: 9.0,
                year: 1943,
                category: "Read"
              },
              {
                id: 4,
                title: "Godan",
                writer: "Munshi Premchand",
                rating: 8.9,
                year: 1994,
                category: "Continue Reading"
              },
              {
                id: 5,
                title: "The White Tiger",
                writer: "Arvind Adiga",
                rating: 8.5,
                year: 1994,
                category: "Continue Reading"
              },
              {
                id: 6,
                title: "A Suitable Boy",
                writer: "Vikram Seth",
                rating: 8.8,
                year: 2010,
                category: "Want to read"
              }
            ]
          });
        } else {
          reject({
            status: 404,
            message: "Books not found."
          });
        }
      }, 2000);
    });
  };
  