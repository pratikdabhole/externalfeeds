// externalfeed.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const feedContainer = document.getElementById('feed');

  if (!feedContainer) return;

  // Example content: a list of items (like a feed)
  const feedItems = [
    "8.8.8.8,
4.4.8.8,
1.1.1.1,
4.2.2.2,
168.63.129.16,
172.217.16.238,
142.250.187.238,
157.240.221.35,
74.6.143.26,
17.253.144.10",
    "This content is loaded from externalfeed.js.",
    "You can update this script to fetch data dynamically.",
    "Hosting static sites with GitHub Pages is easy!",
  ];

  // Create an unordered list element
  const ul = document.createElement('ul');

  // Add each feed item as a list element
  feedItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });

  // Append the list to the feed container
  feedContainer.appendChild(ul);
});
