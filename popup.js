document.getElementById("summarize").addEventListener("click", async () => {
  const articleText = document.getElementById("article-text").value;
  const summaryLength = document.getElementById("summary-length").value;
  const summaryTextElement = document.getElementById("summary-text");

  if (articleText) {
    try {
      const summary = await summarizeArticle(articleText, summaryLength);
      summaryTextElement.textContent = summary;
    } catch (error) {
      summaryTextElement.textContent = "Error: Unable to generate summary.";
      console.error(error);
    }
  } else {
    summaryTextElement.textContent = "Please paste the article text to summarize.";
  }
});

async function summarizeArticle(articleText, summaryLength) {
  // This line is meant to be replaced with the API to call to utilize ChatGPT
  const response = await fetch("Summarization API", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: articleText, length: summaryLength })
  });

  if (response.ok) {
    const data = await response.json();
    return data.summary;
  } else {
    throw new Error("Failed to fetch summary from the API.");
  }
}
