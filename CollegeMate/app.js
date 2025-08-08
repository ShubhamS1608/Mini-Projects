const calendar = document.getElementById('calendar');
    const daysInMonth = 30; // Simplified to 30 days

    for (let day = 1; day <= daysInMonth; day++) {
      const dateDiv = document.createElement('div');
      dateDiv.className = 'day';
      dateDiv.innerHTML = `<strong>${day}</strong><ul></ul>`;
      dateDiv.addEventListener('click', function () {
        const task = prompt(`Add event for day ${day}`);
        if (task) {
          const li = document.createElement('li');
          li.textContent = task;
          li.addEventListener('click', function (e) {
            e.stopPropagation();
            li.classList.toggle('completed');
          });
          dateDiv.querySelector('ul').appendChild(li);
        }
      });
      calendar.appendChild(dateDiv);
    }