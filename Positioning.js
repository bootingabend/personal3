

function syncHeights() {
  const box1 = document.getElementById('projectCard1');
  const box2 = document.getElementById('thumbnailCont1');

  if (box1 && box2) {
    const height = box1.offsetHeight;
    box2.style.height = `${height}px`;
    console.log(`Synced height: ${height}px`);
  } else {
    console.warn("Elements not found. Cannot sync heights.");
  }
}

// Fetch and inject projects.html
fetch('./projects.html')
  .then(response => {
    if (!response.ok) throw new Error("Failed to load projects.html");
    return response.text();
  })
  .then(html => {
    const container = document.getElementById('projectContainer');
    container.innerHTML = html;

    // Wait for browser to render before syncing
    requestAnimationFrame(() => {
      syncHeights();
    });
  })
  .catch(err => console.error("Error loading project HTML:", err));

window.addEventListener('load', () => {
  syncHeights();
});

// Re-sync on window resize
window.addEventListener('resize', syncHeights);



//   fetch("./projects.html");

//   window.addEventListener('load', () => {
//     const box1 = document.getElementById('projectCard1');
//     const box2 = document.getElementById('thumbnailCont1');

//     const height = box1.offsetHeight;
//     box2.style.height = `${height}px`;
//   });


//   window.addEventListener('resize', () => {
//     const box1 = document.getElementById('projectCard1');
//     const box2 = document.getElementById('thumbnailCont1');

//     const height = box1.offsetHeight;
//     box2.style.height = `${height}px`;
//   });


// function syncHeights() {
//   const box1 = document.getElementById('projectCard1');
//   const box2 = document.getElementById('thumbnailCont1');

//   if (box1 && box2) {
//     const height = box1.offsetHeight;
//     box2.style.height = `${height}px`;
//   } else {
//     console.warn("Elements not found for syncing heights.");
//   }
// }

// // Load and inject the HTML
// fetch("./projects.html")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.text();
//   })
//   .then(html => {
//     // Inject the loaded HTML into the page
//     document.getElementById('projectContainer').innerHTML = html;

//     // Wait for DOM to update before syncing heights
//     requestAnimationFrame(() => {
//       syncHeights();
//     });
//   })
//   .catch(error => {
//     console.error("Error loading projects.html:", error);
//   });

// // Re-sync on window resize
// window.addEventListener('resize', syncHeights);


