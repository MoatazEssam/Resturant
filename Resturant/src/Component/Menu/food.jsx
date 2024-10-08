import img1 from "../../assets/Menu/pizza/pizzaBBQchicken.jpg";
import img2 from "../../assets/Menu/pizza/pizzaBuffalo Chicken.jpeg";
import img3 from "../../assets/Menu/pizza/pizzaFourCheese.jpeg";
import img4 from "../../assets/Menu/pizza/PizzaHawaii.jpeg";
import img5 from "../../assets/Menu/pizza/pizzaMargherita.jpg";
import img6 from "../../assets/Menu/pizza/pizzaMeat Lovers.jpeg";
import img7 from "../../assets/Menu/pizza/pizzaMushroom and Truffle.jpeg";
import img8 from "../../assets/Menu/pizza/pizzaPepperoni.jpg";
import img9 from "../../assets/Menu/pizza/pizzaSpinach and Feta.jpeg";
import img10 from "../../assets/Menu/pizza/pizzaVeggie Delight.jpeg";
import img11 from "../../assets/Menu/burger/Avocado Bacon Burger.jpeg";
import img12 from "../../assets/Menu/burger/Bacon Cheeseburger.jpeg";
import img13 from "../../assets/Menu/burger/BBQ Bacon Burger.jpeg";
import img14 from "../../assets/Menu/burger/Blue Cheese Burger.jpeg";
import img15 from "../../assets/Menu/burger/Chicken Burger.jpeg";
import img16 from "../../assets/Menu/burger/Classic Cheeseburger.jpeg";
import img17 from "../../assets/Menu/burger/Double Decker.jpeg";
import img18 from "../../assets/Menu/burger/Mushroom Swiss Burger.jpeg";
import img19 from "../../assets/Menu/burger/Spicy Jalapeno Burger.jpeg";
import img20 from "../../assets/Menu/burger/Veggie Burger.jpeg";
import img21 from "../../assets/Menu/Drink/Blue Perry.jpeg";
import img22 from "../../assets/Menu/Drink/Espresso.jpeg";
import img23 from "../../assets/Menu/Drink/Fruit Punch.jpeg";
import img24 from "../../assets/Menu/Drink/Green Juice.jpeg";
import img25 from "../../assets/Menu/Drink/Hot Chocolate.jpeg";
import img26 from "../../assets/Menu/Drink/Iced Tea.jpeg";
import img27 from "../../assets/Menu/Drink/Latte.jpeg";
import img28 from "../../assets/Menu/Drink/Lemonade.jpeg";
import img29 from "../../assets/Menu/Drink/Mango Smoothie.jpeg";
import img30 from "../../assets/Menu/Drink/Mojito.jpeg";
import img31 from "../../assets/Menu/seafood/Calamari.jpeg";
import img32 from "../../assets/Menu/seafood/Clam Chowder.jpeg";
import img33 from "../../assets/Menu/seafood/Crab Cakes.jpeg";
import img34 from "../../assets/Menu/seafood/Fish and Chips.jpeg";
import img35 from "../../assets/Menu/seafood/Grilled Salmon.jpeg";
import img36 from "../../assets/Menu/seafood/Lobster Roll.jpeg";
import img37 from "../../assets/Menu/seafood/Mussels in White Wine.jpeg";
import img38 from "../../assets/Menu/seafood/Oysters Rockefeller.jpeg";
import img39 from "../../assets/Menu/seafood/Seafood Paella.jpeg";
import img40 from "../../assets/Menu/seafood/Shrimp Scampi.jpeg";
import img41 from "../../assets/Menu/salad/Asian Chicken Salad.jpeg";
import img42 from "../../assets/Menu/salad/Caesar Salad.jpeg";
import img43 from "../../assets/Menu/salad/Caprese Salad.jpeg";
import img44 from "../../assets/Menu/salad/Cobb Salad.jpeg";
import img45 from "../../assets/Menu/salad/Greek Saladjpeg.jpeg";
import img46 from "../../assets/Menu/salad/Kale Salad.jpeg";
import img47 from "../../assets/Menu/salad/Niçoise Salad.jpeg";
import img48 from "../../assets/Menu/salad/Quinoa Salad.jpeg";
import img49 from "../../assets/Menu/salad/Taco Salad.jpeg";
import img50 from "../../assets/Menu/salad/Tuna Salad.jpeg";
import img51 from "../../assets/Menu/salad/Waldorf Salad.jpeg";
import img52 from "../../assets//Menu/Breakfast/Avocado Toast.jpeg";
import img53 from "../../assets//Menu/Breakfast/Bagel with Cream Cheese.jpeg";
import img54 from "../../assets//Menu/Breakfast/Breakfast Burrito.jpeg";
import img55 from "../../assets//Menu/Breakfast/Breakfast Sandwich.jpeg";
import img56 from "../../assets//Menu/Breakfast/Eggs Benedict.jpeg";
import img57 from "../../assets//Menu/Breakfast/French Toast.jpeg";
import img58 from "../../assets//Menu/Breakfast/Granola Parfait.jpeg";
import img59 from "../../assets//Menu/Breakfast/Omelette.jpeg";
import img60 from "../../assets//Menu/Breakfast/Pancakes.jpeg";
import img61 from "../../assets//Menu/Breakfast/Smoothie Bowl.jpeg";

export const cat = [
  { id: 1, name: "All", att: "" },
  { id: 2, name: "Pizza", att: "Pizza" },
  { id: 3, name: "Burger", att: "Burger" },
  { id: 4, name: "Seafood", att: "Seafood" },
  { id: 5, name: "Drinks", att: "Drink" },
  { id: 6, name: "Breakfast", att: "Breakfast" },
  { id: 7, name: "Salad", att: "Salad" },
];
export const foods = [
  {
    id: 1,
    name: "Margherita",
    description:
      "Classic pizza topped with tomato sauce, mozzarella, and fresh basil.",
    rate: 4.5,
    price: 8.99,
    img: img5,
    category: "Pizza",
  },
  {
    id: 2,
    name: "Pepperoni",
    description:
      "Pepperoni pizza with a blend of mozzarella and parmesan cheese.",
    rate: 4.7,
    img: img8,
    price: 9.99,
    category: "Pizza",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description:
      "Pizza topped with BBQ sauce, grilled chicken, onions, and cilantro.",
    rate: 4.8,
    img: img1,
    price: 11.99,
    category: "Pizza",
  },
  {
    id: 4,
    name: "Hawaiian",
    description: "A controversial combination of ham and pineapple on pizza.",
    rate: 4.3,
    img: img4,
    price: 10.99,
    category: "Pizza",
  },
  {
    id: 5,
    name: "Four Cheese",
    description: "A blend of mozzarella, cheddar, blue cheese, and parmesan.",
    rate: 4.6,
    img: img3,
    price: 12.49,
    category: "Pizza",
  },
  {
    id: 6,
    name: "Veggie Delight",
    description:
      "A pizza topped with bell peppers, onions, olives, and mushrooms.",
    rate: 4.4,
    img: img10,
    price: 9.49,
    category: "Pizza",
  },
  {
    id: 7,
    name: "Meat Lovers",
    description: "Pizza loaded with pepperoni, sausage, bacon, and ham.",
    rate: 4.9,
    img: img6,
    price: 13.99,
    category: "Pizza",
  },
  {
    id: 8,
    name: "Mushroom and Truffle",
    description:
      "A gourmet pizza topped with mushrooms and a drizzle of truffle oil.",
    rate: 4.7,
    img: img7,
    price: 14.99,
    category: "Pizza",
  },
  {
    id: 9,
    name: "Buffalo Chicken",
    description:
      "Pizza topped with spicy buffalo chicken and blue cheese crumbles.",
    rate: 4.6,
    img: img2,
    price: 11.49,
    category: "Pizza",
  },
  {
    id: 10,
    name: "Spinach and Feta",
    description:
      "A lighter pizza option with spinach, feta, and sun-dried tomatoes.",
    rate: 4.5,
    img: img9,
    price: 10.49,
    category: "Pizza",
  },
  {
    id: 11,
    name: "Classic Cheeseburger",
    description:
      "A juicy beef patty topped with cheddar cheese, lettuce, tomato, and onions.",
    rate: 4.7,
    img: img16,
    price: 8.49,
    category: "Burger",
  },
  {
    id: 12,
    name: "Bacon Cheeseburger",
    description:
      "Burger topped with crispy bacon, cheddar cheese, and BBQ sauce.",
    rate: 4.8,
    img: img12,
    price: 9.99,
    category: "Burger",
  },
  {
    id: 13,
    name: "Mushroom Swiss Burger",
    description:
      "A savory burger topped with sautéed mushrooms and Swiss cheese.",
    rate: 4.6,
    img: img18,
    price: 10.49,
    category: "Burger",
  },
  {
    id: 14,
    name: "Veggie Burger",
    description: "A plant-based burger with lettuce, tomato, and avocado.",
    rate: 4.4,
    img: img20,
    price: 7.99,
    category: "Burger",
  },
  {
    id: 15,
    name: "Chicken Burger",
    description: "Grilled chicken breast with lettuce, tomato, and mayo.",
    rate: 4.5,
    img: img15,
    price: 8.99,
    category: "Burger",
  },
  {
    id: 16,
    name: "BBQ Bacon Burger",
    description:
      "A burger with BBQ sauce, bacon, onion rings, and cheddar cheese.",
    rate: 4.8,
    img: img13,
    price: 11.49,
    category: "Burger",
  },
  {
    id: 17,
    name: "Blue Cheese Burger",
    description:
      "Burger topped with blue cheese crumbles and caramelized onions.",
    rate: 4.7,
    img: img14,
    price: 10.99,
    category: "Burger",
  },
  {
    id: 18,
    name: "Spicy Jalapeno Burger",
    description:
      "A burger with jalapenos, pepper jack cheese, and chipotle mayo.",
    rate: 4.6,
    img: img19,
    price: 9.49,
    category: "Burger",
  },
  {
    id: 19,
    name: "Avocado Bacon Burger",
    description:
      "Burger topped with avocado slices, crispy bacon, and ranch dressing.",
    rate: 4.7,
    img: img11,
    price: 10.99,
    category: "Burger",
  },
  {
    id: 20,
    name: "Double Decker",
    description:
      "Two beef patties, double cheese, lettuce, tomato, and secret sauce.",
    rate: 4.9,
    img: img17,
    price: 12.49,
    category: "Burger",
  },
  {
    id: 21,
    name: "Blue Perry",
    description: "Classic cola with a refreshing taste.",
    rate: 4.5,
    price: 1.99,
    img: img21,
    category: "Drink",
  },
  {
    id: 22,
    name: "Lemonade",
    description: "Freshly squeezed lemonade with a hint of mint.",
    rate: 4.6,
    img: img28,
    price: 2.49,
    category: "Drink",
  },
  {
    id: 23,
    name: "Iced Tea",
    description: "Chilled black tea served with lemon and ice.",
    rate: 4.4,
    img: img26,
    price: 2.29,
    category: "Drink",
  },
  {
    id: 24,
    name: "Mango Smoothie",
    description: "A tropical blend of mango, banana, and coconut milk.",
    rate: 4.7,
    img: img29,
    price: 3.99,
    category: "Drink",
  },
  {
    id: 25,
    name: "Latte",
    description: "A creamy espresso-based drink with steamed milk.",
    rate: 4.8,
    img: img27,
    price: 4.49,
    category: "Drink",
  },
  {
    id: 26,
    name: "Green Juice",
    description: "A healthy blend of kale, spinach, apple, and cucumber.",
    rate: 4.5,
    img: img24,
    price: 3.49,
    category: "Drink",
  },
  {
    id: 27,
    name: "Mojito",
    description: "A refreshing cocktail with rum, mint, lime, and soda.",
    rate: 4.6,
    img: img30,
    price: 5.99,
    category: "Drink",
  },
  {
    id: 28,
    name: "Hot Chocolate",
    description: "Rich hot chocolate topped with whipped cream.",
    rate: 4.7,
    img: img25,
    price: 2.99,
    category: "Drink",
  },
  {
    id: 29,
    name: "Espresso",
    description: "A strong and rich coffee shot.",
    rate: 4.8,
    img: img22,
    price: 2.49,
    category: "Drink",
  },
  {
    id: 30,
    name: "Fruit Punch",
    description: "A mix of tropical fruits with a splash of soda.",
    rate: 4.5,
    img: img23,
    price: 3.29,
    category: "Drink",
  },
  {
    id: 31,
    name: "Grilled Salmon",
    description: "Salmon fillet grilled to perfection with lemon and herbs.",
    rate: 4.7,
    img: img35,
    price: 14.99,
    category: "Seafood",
  },
  {
    id: 32,
    name: "Fish and Chips",
    description: "Crispy fried fish served with thick-cut fries.",
    rate: 4.6,
    img: img34,
    price: 12.99,
    category: "Seafood",
  },
  {
    id: 33,
    name: "Lobster Roll",
    description: "A New England favorite with fresh lobster in a buttery roll.",
    rate: 4.8,
    img: img36,
    price: 19.99,
    category: "Seafood",
  },
  {
    id: 34,
    name: "Shrimp Scampi",
    description: "Garlic butter shrimp served over a bed of linguine.",
    rate: 4.7,
    img: img40,
    price: 15.99,
    category: "Seafood",
  },
  {
    id: 35,
    name: "Clam Chowder",
    description: "A creamy soup with clams, potatoes, and bacon.",
    rate: 4.5,
    img: img32,
    price: 7.99,
    category: "Seafood",
  },
  {
    id: 36,
    name: "Oysters Rockefeller",
    description: "Baked oysters topped with spinach, cheese, and breadcrumbs.",
    rate: 4.6,
    img: img38,
    price: 16.99,
    category: "Seafood",
  },
  {
    id: 37,
    name: "Crab Cakes",
    description: "Golden-brown crab cakes served with tartar sauce.",
    rate: 4.8,
    img: img33,
    price: 13.99,
    category: "Seafood",
  },
  {
    id: 38,
    name: "Seafood Paella",
    description: "A Spanish rice dish with a mix of seafood and vegetables.",
    rate: 4.9,
    img: img39,
    price: 18.99,
    category: "Seafood",
  },
  {
    id: 39,
    name: "Mussels in White Wine",
    description: "Mussels steamed in a white wine garlic sauce.",
    rate: 4.7,
    img: img37,
    price: 14.49,
    category: "Seafood",
  },
  {
    id: 40,
    name: "Calamari",
    description: "Lightly battered squid rings served with marinara sauce.",
    rate: 4.4,
    img: img31,
    price: 10.99,
    category: "Seafood",
  },
  {
    id: 41,
    name: "Caesar Salad",
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
    rate: 4.6,
    img: img42,
    price: 7.49,
    category: "Salad",
  },
  {
    id: 42,
    name: "Greek Salad",
    description:
      "Fresh salad with tomatoes, cucumbers, olives, and feta cheese.",
    rate: 4.5,
    img: img45,
    price: 8.49,
    category: "Salad",
  },
  {
    id: 43,
    name: "Cobb Salad",
    description:
      "A hearty salad with chicken, bacon, avocado, and blue cheese.",
    rate: 4.7,
    img: img44,
    price: 9.99,
    category: "Salad",
  },
  {
    id: 44,
    name: "Caprese Salad",
    description:
      "Slices of mozzarella, tomatoes, and basil with a balsamic drizzle.",
    rate: 4.8,
    img: img43,
    price: 8.99,
    category: "Salad",
  },
  {
    id: 45,
    name: "Quinoa Salad",
    description: "A healthy mix of quinoa, veggies, and a lemon vinaigrette.",
    rate: 4.4,
    img: img48,
    price: 7.99,
    category: "Salad",
  },
  {
    id: 46,
    name: "Tuna Salad",
    description:
      "A light salad with mixed greens, seared tuna, and a sesame dressing.",
    rate: 4.7,
    img: img50,
    price: 11.99,
    category: "Salad",
  },
  {
    id: 47,
    name: "Waldorf Salad",
    description:
      "A mix of apples, celery, grapes, and walnuts in a light mayo dressing.",
    rate: 4.3,
    img: img51,
    price: 8.49,
    category: "Salad",
  },
  {
    id: 48,
    name: "Asian Chicken Salad",
    description:
      "Grilled chicken with crunchy veggies and a sesame ginger dressing.",
    rate: 4.6,
    img: img41,
    price: 10.99,
    category: "Salad",
  },
  {
    id: 49,
    name: "Kale Salad",
    description:
      "Fresh kale with cranberries, almonds, and a citrus vinaigrette.",
    rate: 4.5,
    img: img46,
    price: 9.49,
    category: "Salad",
  },
  {
    id: 50,
    name: "Taco Salad",
    description:
      "Lettuce topped with seasoned beef, cheese, salsa, and tortilla strips.",
    rate: 4.7,
    img: img49,
    price: 8.99,
    category: "Salad",
  },
  {
    id: 51,
    name: "Niçoise Salad",
    description: "A French salad with tuna, olives, eggs, and green beans.",
    rate: 4.8,
    img: img47,
    price: 10.99,
    category: "Salad",
  },
  {
    id: 52,
    name: "Pancakes",
    description: "Fluffy pancakes served with maple syrup and butter.",
    rate: 4.8,
    img: img60,
    price: 6.99,
    category: "Breakfast",
  },
  {
    id: 53,
    name: "Omelette",
    description:
      "Three-egg omelette with your choice of cheese, ham, and veggies.",
    rate: 4.7,
    img: img59,
    price: 7.49,
    category: "Breakfast",
  },
  {
    id: 54,
    name: "French Toast",
    description:
      "Bread dipped in egg batter, fried, and topped with powdered sugar.",
    rate: 4.6,
    img: img57,
    price: 6.49,
    category: "Breakfast",
  },
  {
    id: 55,
    name: "Eggs Benedict",
    description:
      "Poached eggs on English muffins with ham and hollandaise sauce.",
    rate: 4.9,
    img: img56,
    price: 8.99,
    category: "Breakfast",
  },
  {
    id: 56,
    name: "Breakfast Burrito",
    description: "A tortilla filled with scrambled eggs, cheese, and sausage.",
    rate: 4.7,
    img: img54,
    price: 7.99,
    category: "Breakfast",
  },
  {
    id: 57,
    name: "Avocado Toast",
    description:
      "Toast topped with mashed avocado, poached eggs, and chili flakes.",
    rate: 4.8,
    img: img52,
    price: 5.99,
    category: "Breakfast",
  },
  {
    id: 58,
    name: "Smoothie Bowl",
    description:
      "A thick smoothie topped with granola, fruits, and chia seeds.",
    rate: 4.6,
    img: img61,
    price: 8.49,
    category: "Breakfast",
  },
  {
    id: 59,
    name: "Bagel with Cream Cheese",
    description: "Toasted bagel served with a generous spread of cream cheese.",
    rate: 4.5,
    img: img53,
    price: 3.99,
    category: "Breakfast",
  },
  {
    id: 60,
    name: "Breakfast Sandwich",
    description: "Egg, cheese, and bacon or sausage on a toasted bun.",
    rate: 4.6,
    img: img55,
    price: 5.99,
    category: "Breakfast",
  },
  {
    id: 61,
    name: "Granola Parfait",
    description: "Layers of granola, yogurt, and fresh berries.",
    rate: 4.5,
    img: img58,
    price: 4.99,
    category: "Breakfast",
  },
];
