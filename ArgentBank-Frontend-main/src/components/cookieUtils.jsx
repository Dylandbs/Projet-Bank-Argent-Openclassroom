export const SetCookie = (name, value, days = null) => {
  let expires;
  if (days !== null) {
    expires = new Date(Date.now() + days * 864e5).toUTCString();
  } else {
    expires = "";
  }
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
};

export const GetCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const DeleteCookie = (name) => {
  document.cookie = `${name}=; Max-Age=0; path=/;`;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

