
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const extras = data.getAll('extra').join(', ') || 'None';
      const subject = encodeURIComponent('New Booking Request – Sowden Transport');
      const body = encodeURIComponent(
        'Contact: ' + data.get('name') + ' | Phone: ' + data.get('phone') + '\n\n' +
        'Pickup: ' + data.get('pickup') + ' (' + (data.get('pickupWindow') || 'Anytime') + ')\n' +
        'Delivery: ' + data.get('delivery') + ' (' + (data.get('deliveryWindow') || 'Anytime') + ')\n' +
        'Freight: ' + data.get('desc') + '\n' +
        'Protection: ' + extras
      );
      window.location.href = 'mailto:dallsowdcac@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
