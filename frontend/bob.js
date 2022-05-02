//koden används inte



// const addProduct = async () => {
//     let image = document.querySelector("#productImage").files;
//     let imgData = new FormData();
//     imgData.append('files', image[0]);
//     let selectedGenres = [];
//     document.querySelectorAll("input[type='checkbox']:checked").forEach(genre => {
//         selectedGenres.push(genre.value)
//     })
//     let text = selectedGenres.toString()

//     const data = {
//         title: bookTitle.value,
//         author: bookAuthor.value,
//         type: audioBook.checked ? audioBook.value : WrittenBook.value,
//         lenght: audioBook.checked ? bookLenght.value + " min" : bookLenght.value + " pages",
//         genre: text,
//         release: bookRelease.value,
//         rating: bookRating.value,
//         bookowner: sessionStorage.getItem("username"),
//         bookid: sessionStorage.getItem("userid"),
//         contact: sessionStorage.getItem("email"),
//     }

//     sessionStorage.setItem("imageData", data);

//     console.log("Going to upload")
//     const imageId = await uploadBookCover(imgData)
//     console.log(imageId)

//     /*const bookdata = await createBook(text, imageId)  
//     console.log(bookdata.data)

//     console.log("YESSSS")*/
//     allBooksContainer.classList.add("hidden")
//     document.querySelector(".add-book").classList.remove("hidden")  
// }
// //Skapar bok

// const fetchLatestBookCover = async () => {
//     try {
//         console.info("GOING TO FETCH BOOKS")
//         const res = await axios.get("http://localhost:1337/api/upload/files", {
//             headers: {
//                 Authorization: `Bearer ${sessionStorage.getItem("token")}`
//             },
//         })
//         console.log(res.data)
//         const books = res.data
//         const latestBook = books.pop()
//         console.log("LATEST:", latestBook)
//         const bookId = latestBook.id
//         console.log("ID:", bookId)
//         console.log("URL:", latestBook.url)
//         return bookId

//     } catch(error) {
//         console.log(error)
//     }
// }

// //fetchBooksCovers();

// const fetchLatestBook = async () => {
//     try {
//         console.info("GOING TO FETCH BOOKS")
//         const res = await axios.get("http://localhost:1337/api/books", {
//             headers: {
//                 Authorization: `Bearer ${sessionStorage.getItem("token")}`
//             },
//         })
//         return res.data.data

//     } catch(error) {
//         console.log(error)
//     }
// }

// const addBookId = () => {
//     const latestBook = fetchLatestBook()
//     console.log("latest id", latestBook.image)
//     const latestBookCover = fetchLatestBookCover()
//     console.log(latestBookCover)

//     const data = sessionStorage.getItem("data")
//     console.log(data)
    
//     createBook(data)

// }

// addBookId();

// const uploadBookCover = async (imgData) => {
//     try {
//         const res = await axios.post("http://localhost:1337/api/upload", imgData, {
//             headers: {
//                 Authorization: `Bearer ${sessionStorage.getItem("token")}`
//             },
//         })
//         console.log(res.data)
//         return res.data[0].id
//     } catch (error) {
//         console.error("ERROR:",error)
//     }
// }

// const createBook = async (data, imageId) => {
//     console.log("GOING TO CREATE BOOK")
//     try {
//         const result = await axios.post("http://localhost:1337/api/books", {
//             headers: {
//                 Authorization: `Bearer ${sessionStorage.getItem("token")}`
//             },
//             data: data,
//         })

//         console.log(result.header)
//         console.log(result)
//         return result.data
//     } catch (error) {
//         console.log(error);
//     }
// }
