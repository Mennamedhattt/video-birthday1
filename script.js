function openWebsite(){document.getElementById('cover').style.display='none';const overlay=document.getElementById('videoOverlay');const video=document.getElementById('introVideo');overlay.style.display='flex';video.currentTime=0;video.play().catch(()=>{});video.onended = function () {

    document.body.innerHTML = `
    <style>
        body{
            margin:0;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg,#000,#3d001d);
            overflow:hidden;
            font-family:Poppins,sans-serif;
        }

        .heart{
            position:relative;
            width:260px;
            height:260px;
            background:#ff2d55;
            transform:rotate(-45deg);
            display:flex;
            justify-content:center;
            align-items:center;
            animation:beat 1.2s infinite;
            box-shadow:0 0 50px rgba(255,45,85,.6);
        }

        .heart::before,
        .heart::after{
            content:"";
            position:absolute;
            width:260px;
            height:260px;
            background:#ff2d55;
            border-radius:50%;
        }

        .heart::before{
            top:-130px;
            left:0;
        }

        .heart::after{
            left:130px;
            top:0;
        }

        .text{
            position:absolute;
            transform:rotate(45deg);
            text-align:center;
            color:white;
            width:180px;
            z-index:2;
        }

        .text h2{
            font-family:"Great Vibes",cursive;
            font-size:40px;
            margin-bottom:10px;
        }

        .text p{
            font-size:18px;
            line-height:1.6;
        }

        @keyframes beat{
            0%,100%{
                transform:rotate(-45deg) scale(1);
            }
            50%{
                transform:rotate(-45deg) scale(1.08);
            }
        }
    </style>

    <div class="heart">
        <div class="text">
            <h2>I Love You ❤️</h2>

            <p>
                Happy Birthday,<br>
                My Forever Person.<br>
                You are my happiness,<br>
                my home, and my heart.
            </p>
        </div>
    </div>
    `;
};}
