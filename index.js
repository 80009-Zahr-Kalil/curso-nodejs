const usersAPI = "https://jsonplaceholder.typicode.com/users";
const userImage = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png";

function createUserCard(userImage, userName, userEmail, userPhone, userCity) {
    const userCard = document.createElement("div");
    userCard.id = "userCard";

    const image = document.createElement("div");
    image.id = "userImage";
    image.style.backgroundImage = `url(${userImage})`

    const name = document.createElement("div");
    name.id = "userName";
    name.innerHTML = "Name: " + userName;

    const email = document.createElement("div");
    email.id = "userEmail";
    email.innerHTML = "Email: " + userEmail;

    const city = document.createElement("div");
    city.id = "userCity";
    city.innerHTML = "City: " + userCity;

    const phone = document.createElement("div");
    phone.id = "userPhone";
    phone.innerHTML = "Phone: " + userPhone;

    userCard.appendChild(image);
    userCard.appendChild(name);
    userCard.appendChild(email);
    userCard.appendChild(phone);
    userCard.appendChild(city);

    document.getElementById("users").appendChild(userCard);
}

// createUserCard(userImage, "Kalil", "kalil@gmail.com", "123456789", "Cordoba");
// createUserCard(userImage, "Patri", "patri@gmail.com", "123456789", "Cordoba");
// createUserCard(userImage, "Luchin", "luchin@gmail.com", "123456789", "Cordoba");
// createUserCard(userImage, "Lucas", "lucas@gmail.com", "123456789", "Cordoba");
// createUserCard(userImage, "Tincho", "tincho@gmail.com", "123456789", "Cordoba");
// createUserCard(userImage, "Pachorra", "pachorra@gmail.com", "123456789", "Cordoba");

async function fetchData(url) {
    const data = await fetch(url)
        .then(response => { return response.json() })
        .catch(err => console.log(err));
    
    data.forEach(user => {
        createUserCard(
            userImage, 
            user.name, 
            user.email, 
            user.phone,
            user.address.city
        );
    });
}

function main() {
    fetchData(usersAPI);
}

main();