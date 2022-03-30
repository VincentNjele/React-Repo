
import Header from './Header'
import image from './images/image4.svg'
import image2 from './images/image3.svg'
import remove from './images/cancel.png'
import CartContents from './CartContents';
import CartDetails from './CartDetails';

function MainComponent() {
  const ListOfData = [
    {
        id: 1,
        title : "KFC - King Bucket",
        cancel: remove,
        image : image,
        price : 10000,
        quantity: 1
     },
     {  id: 2,
        title: "Refuel Max ",
        cancel: remove,
        image: image2,
         price: 1200,
         quantity: 1
     },
     {
        id:  3,
        title: "Refuel Max",
        cancel: remove,
        image: image2,
        price: 1200,
        quantity: 1
     },
]


  return (
    <div >
      <Header />
      <CartDetails/>
      <CartContents key= {ListOfData.id} products= {ListOfData}  />
      
    </div>
  );
}

export default MainComponent;
