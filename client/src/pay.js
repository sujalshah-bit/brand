// const itemName = "Ferrero Rocher";
//   const itemPrice = 800;
//   const [quantity, setQuantity] = useState(1);
//   const [finalAmount, setFinalAmount] = useState(itemPrice);

//   const increment = () => {
//     setQuantity(quantity + 1);
//     setFinalAmount(finalAmount + itemPrice);
//   };

//   const decrement = () => {
//     if (quantity <= 1) {
//       setQuantity(1);
//       setFinalAmount(itemPrice);
//     }
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//       setFinalAmount(finalAmount - itemPrice);
//     }
//   };
//   const checkout = () => {
//     fetch("http://localhost:5000/create-checkout-session", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       mode: "cors",
//       body: JSON.stringify({
//         items: [
//           { id: 1, quantity: quantity, price: itemPrice, name: itemName },
//         ],
//       }),
//     })
//       .then((res) => {
//         if (res.ok) {
//           console.log("res", res);
//           return res.json();
//         } else {
//           return res.json().then((json) => Promise.reject(json));
//         }
//       })
//       .then(({ url }) => {
//         console.log("url .then = ", url);
//         window.location = url;
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };
