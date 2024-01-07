document.addEventListener('DOMContentLoaded', function () {
    // Fetch data using the provided curl command
    fetch('https://sk-soft-backend.jsa-app.workers.dev/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    .then(response => response.json())
    .then(data => {
      // Extract data from the JSON
      const result = data.result;
  
      // Extract labels and values from the result
      const labels = result.map(entry => entry['LEFT(clsrm,3)']);
      const values = result.map(entry => entry['count(id)']);
  
      // Create a bar chart
      const ctx = document.getElementById('myBarChart').getContext('2d');
      const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Count of Students',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
    .catch(error => console.error('Error fetching data:', error));
  });
  