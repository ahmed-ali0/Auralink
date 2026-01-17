const root = document.documentElement;

// شوف هل الدارك مود كان مفعل قبل كده
if(localStorage.getItem("theme") === "dark"){
    root.classList.add("dark");
}

// زرار التبديل
const btn = document.getElementById("themeToggle");
if(btn){
    btn.addEventListener("click", () => {
        root.classList.toggle("dark");

        // حفظ الاختيار
        if(root.classList.contains("dark")){
            localStorage.setItem("theme", "dark");
        }else{
            localStorage.setItem("theme", "light");
        }
    });
}
