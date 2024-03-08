document.getElementById('viewAsTableBtn').addEventListener('click', function () {
    const formData = new FormData(document.getElementById('jobApplicationForm'));
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container');
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    // Add table headers
    const headers = ['First Name', 'Last Name', 'Phone Number', 'Email Address', 'Street', 'City', 'State', 'ZIP Code', 'Resume'];
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    // Add table rows with form data
    const dataRow = document.createElement('tr');
    formData.forEach((value, key) => {
        const td = document.createElement('td');
        td.textContent = value;
        dataRow.appendChild(td);
    });
    tableBody.appendChild(dataRow);
    table.appendChild(tableBody);

    tableContainer.appendChild(table);
    document.body.appendChild(tableContainer);
});

