function openWebsite(){document.getElementById('cover').style.display='none';const overlay=document.getElementById('videoOverlay');const video=document.getElementById('introVideo');overlay.style.display='flex';video.currentTime=0;video.play().catch(()=>{});video.onended = function () {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#1111;
            color:black;
            font-family:'Great Vibes',cursive;
            font-size:50px;
            text-align:center;
        ">
           Happy birthday to the love of my life ❤️
           
عمري ما كنت هتخيل اني هحبك كده وانك هتكون اكتر حد شبهي وبتضحكني وفاهمني وان وجودك في حياتي هيكون اجمل حاجه حصلتلي انت وحشتني اوي اوي يا بدابيدو وحياتي من غير لمسة ايديك وحضنك وحشه اوي وناقصه بعد الايام وبحاول انقص منهم عشان اهونها وان شاءالله اشوفك علي خير وربنا يرجعك لحضني ونبقي سوا يا حبيب عمري وروحي ❤️❤️
        </div>
    `;
};}
