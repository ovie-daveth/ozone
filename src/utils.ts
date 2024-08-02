export function timeAgo(date: any) {
    const inputDate = new Date(date); // Ensure the date is a Date object
    const now = new Date();
    const seconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
  
    if (interval >= 1) {
      return interval === 1 ? "1 year ago" : `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval === 1 ? "1 month ago" : `${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval === 1 ? "1 day ago" : `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval === 1 ? "1 hour ago" : `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval === 1 ? "1 minute ago" : `${interval} minutes ago`;
    }
    return seconds <= 1 ? "just now" : `${seconds} seconds ago`;
  }
  
  // Example usage
  const someDate = "2024-08-02T14:01:43.061+00:00";
  console.log(timeAgo(someDate)); // Output will depend on the current date and time
  