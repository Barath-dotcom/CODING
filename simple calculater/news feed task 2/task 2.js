const newsData = [{
id:1,
title:"AI Revolution in Software Industry",
snippet:"AI is transforming modern software development.",
image:"https://campustechnology.com/-/media/EDU/CampusTechnology/2024/11/20241120aicloud.jpg",
category:"AI",
content:`<p>Artificial Intelligence is rapidly transforming the software industry by enabling machines to perform tasks that traditionally required human intelligence. AI systems help developers automate repetitive coding tasks and improve overall software quality.</p>

<p>Machine learning algorithms allow applications to learn from historical data and improve their accuracy over time. This is widely used in recommendation systems, fraud detection, and predictive analytics.</p>

<p>AI-powered development tools assist programmers by suggesting code, detecting bugs, and optimizing performance. This reduces development time and increases productivity.</p>

<p>In testing, AI simulates real user behavior and identifies edge cases that are difficult to detect manually. This improves application stability.</p>

<p>AI enhances user experience through chatbots, voice assistants, and personalized content delivery. Many companies rely on AI chatbots for customer support.</p>

<p>Cloud platforms integrate AI services, making advanced AI tools accessible without expensive hardware.</p>

<p>AI also plays a major role in cybersecurity by detecting unusual patterns and preventing attacks.</p>

<p>The demand for AI professionals is increasing across industries such as healthcare, finance, and education.</p>

<p>Overall, Artificial Intelligence is shaping the future of technology by enabling smarter systems and innovative solutions.</p>`
},
{
id:2,
title:"Cloud Computing Growth Worldwide",
snippet:"Cloud platforms are rapidly expanding.",
image:"https://img.freepik.com/premium-photo/this-cloud-storage-icon-features-cloud-with-download-arrow-indicating-that-files-can-be-downloaded-generated-by-ai_399089-7161.jpg",
category:"Cloud",
content:`<p>Cloud computing allows users to store and access data over the internet rather than on local machines. It provides flexibility and scalability to organizations.</p>

<p>One major benefit of cloud computing is cost efficiency, as companies pay only for the resources they use.</p>

<p>Cloud platforms such as AWS, Microsoft Azure, and Google Cloud offer services like storage, databases, and analytics.</p>

<p>Cloud technology supports remote work and global collaboration.</p>

<p>Security is ensured through encryption, identity management, and regular monitoring.</p>

<p>Cloud services also provide automatic backups and disaster recovery solutions.</p>

<p>With digital transformation, cloud computing has become essential in modern IT infrastructure.</p>

<p>Learning cloud skills is important for today’s IT professionals.</p>`
},
{
id:3,
title:"Cybersecurity Threats Increasing",
snippet:"Cyber attacks rising globally.",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8t9xeCSpcaycBa0axAEh3_QWLLJWhAXg5w&s",
category:"Cybersecurity",
content:`<p>Cybersecurity focuses on protecting systems and networks from cyber attacks.</p>

<p>Common threats include phishing, malware, and ransomware attacks.</p>

<p>Firewalls and antivirus software help protect systems.</p>

<p>Encryption secures sensitive data from unauthorized access.</p>

<p>Organizations use multi-factor authentication to improve security.</p>

<p>Employee awareness is critical to prevent cyber threats.</p>

<p>Cybersecurity professionals are in high demand worldwide.</p>

<p>Cybersecurity is a critical requirement in the digital age.</p>`
},
{
id:4,
title:"Importance of Data Handling",
snippet:"Efficient data handling boosts performance.",
image:"https://media.geeksforgeeks.org/wp-content/uploads/20250701160034124414/data_handling.webp",
category:"Data Handling",
content:`<p>Data handling involves collecting, storing, and processing data efficiently.</p>

<p>Proper data handling ensures accuracy and reliability.</p>

<p>Organizations manage large amounts of data daily.</p>

<p>Data validation helps avoid errors.</p>

<p>Secure handling protects sensitive information.</p>

<p>Efficient data handling improves system performance.</p>

<p>It supports analytics and decision-making.</p>

<p>Data handling is a key skill for developers.</p>`
},
{
id:5,
title:"Why Data Structures Matter",
snippet:"Data structures make programs efficient.",
image:"https://media.licdn.com/dms/image/v2/D4D12AQF2UVgSmBI74w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675012140861?e=2147483647&v=beta&t=onM35WzntaqMe38ytADJ3JteI16vWYfWirlxQYUl6ho",
category:"Data Structures",
content:`<p>Data structures organize data efficiently in a program.</p>

<p>Examples include arrays, stacks, queues, and trees.</p>

<p>Choosing the right data structure improves performance.</p>

<p>They reduce memory usage and execution time.</p>

<p>Many algorithms depend on data structures.</p>

<p>They are widely used in real-world applications.</p>

<p>Data structures are important for interviews.</p>

<p>They form the foundation of computer science.</p>`
}
];

const container = document.getElementById("newsContainer");

function displayNews(data){
    container.innerHTML="";
    data.forEach(n=>{
        container.innerHTML+=`
        <div class="news-card">
            <img src="${n.image}">
            <div class="news-content">
                <h3>${n.title}</h3>
                <p>${n.snippet}</p>
                <button onclick="readMore(${n.id})">Read More</button>
            </div>
        </div>`;
    });
}

displayNews(newsData);

function readMore(id){
    const news = newsData.find(n=>n.id===id);
    document.getElementById("modalTitle").innerText=news.title;
    document.getElementById("modalImage").src=news.image;
    document.getElementById("modalContent").innerHTML=news.content;
    document.getElementById("newsModal").style.display="block";
}

function closeModal(){
    document.getElementById("newsModal").style.display="none";
}

document.getElementById("searchInput").addEventListener("keyup",function(){
    const value=this.value.toLowerCase();
    const filtered=newsData.filter(n=>
        n.title.toLowerCase().includes(value) ||
        n.category.toLowerCase().includes(value)
    );
    displayNews(filtered);
});