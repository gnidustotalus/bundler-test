import "babel-polyfill";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data;
};

(async function () {
  const posts = await fetchPosts();

  // map
  // const ids = posts.map((post) => post.id);
  // console.log(ids, "MAP post::Ids");

  // const mappedPosts = posts.map((post) => ({ ...post, active: false }));
  // console.log(mappedPosts, "MAP posts::Mapped");

  // const order = {
  //   sum_gross: 55,
  //   payments: [],
  //   items: [
  //     {
  //       name: "hamburger",
  //       price: 15,
  //       quantity: 5,
  //     },
  //     {
  //       name: "pizza",
  //       price: 34,
  //       quantity: 2,
  //     },
  //     {
  //       name: "spaghetti",
  //       price: 22,
  //       quantity: 1,
  //     },
  //   ],
  // };

  // const prices = order.items.map((item) => item.quantity * item.price);
  // console.log(prices, "MAP order::prices");

  // //reduce - funkcja, którą możemy zsumować elementy w tablicy
  // const orderSum = prices.reduce(
  //   (accumulator, current) => accumulator + current
  // );
  // console.log(orderSum, "REDUCE order::sum");

  // filter - wyszukiwanie (filtrowanie) w tablicy, zwraca tablice elementów
  const filteredPosts = posts.filter((post) => post.id < 10);
  console.log(filteredPosts, "FILTER posts");

  // find - wyszukiwanie w tablicy, zwraca 1 element
  // const firstPost = posts.find((post) => post.id === 1);
  // posts.filter(post) => post.id < 10)[0]
  // console.log(firstPost, "FIND post");

  // push - dodawanie na koniec tablicy
  // filteredPosts.push({ id: 999, title: "XYZ" });
  // console.log(filteredPosts, "PUSH posts");

  // pop - usuwanie ostatniego elementu
  // const removed = filteredPosts.pop();
  // console.log(removed, filteredPosts, "POP posts");

  // unshift - dodawanie na poczatek tablicy
  // filteredPosts.unshift({ id: 998, title: "ZYX" });
  // console.log(filteredPosts, "UNSHIFT posts");

  // shift - usuwanie pierwszego elementu
  // const removedFirst = filteredPosts.shift();
  // console.log(removedFirst, filteredPosts, "SHIFT posts");

  // filteredPosts[4] = { id: 991 };
  // splice
  // const foundPostsIndex = posts.findIndex((post) => post.id === 1);
  // const removedSplice = posts.splice(foundPostsIndex, 3, {
  //   id: 1,
  //   title: "sliced post",
  // });

  // const removedSplice2 = posts.splice(0, 5);
  // console.log(removedSplice2, posts, "SPLICE posts");

  // console.log(removedSplice, posts, "SPLICE posts");

  // slice
  // const slice = posts.slice(90, 100);
  // console.log(slice, "SLICE posts");

  // concat
  // const z = [1, 2, 3, 4];
  // const y = z.concat([5, 6, 7, 8]);

  // console.log(y, "CONCAT");
})();
