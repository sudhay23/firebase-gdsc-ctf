const firebaseConfig = {
    apiKey: "AIzaSyA4SQqCf3U2vvTr_Bkbfl3bHZnGNxr1SMI",
    authDomain: "inductionio-event.firebaseapp.com",
    projectId: "inductionio-event",
    storageBucket: "inductionio-event.appspot.com",
    messagingSenderId: "101950700286",
    appId: "1:101950700286:web:96dd44a34780fe43c143af",
    measurementId: "G-4DYMK46ZVJ",
};

// Init app
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const reviewForm = document.querySelector("form");
const successMessage = document.querySelector(".success-message");

// Submitting the form
reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    successMessage.classList.remove("show");

    let name = document.getElementById("nameInput").value;
    let productName = document.getElementById("productNameInput").value;
    let feedback = document.getElementById("feedbackInput").value;

    firestore
        .collection("Reviews")
        .doc()
        .set({
            name,
            productName,
            feedback,
        })
        .then(() => {
            successMessage.classList.add("show");
            reviewForm.reset();
        })
        .catch((err) => {
            console.error(err);
        });
});
