import twitch from '@/json/twitch.json';
import { addQueryParameters } from './connection';
import { getCookie, setCookie } from './controller';


export function isAuthenticationAvailable() {
  return Boolean(twitch.enabled && twitch.clientId && twitch.redirectUri);
}

export function getTwitchAuthURL() {
  const url = 'https://id.twitch.tv/oauth2/authorize';
  const params = {
    response_type: 'token',
    client_id: twitch.clientId,
    redirect_uri: twitch.redirectUri,
    scope: 'user:read:email'
  }

  return addQueryParameters(url, params);
}

export function getTokenFromUrl() {
  const match = location.hash.match(/#access_token=\w+/);
  if (!match)
    return null;
  
  return match[0].split('=')[1];
}

export function setToken(token) {
  setCookie('authToken', token);
}

export function getToken() {
  return getCookie('authToken');
}

export function removeToken() {
  setCookie('authToken', '', 0);
}

export async function getUsername(token) {
  if (!isAuthenticationAvailable())
    return;

  const response = await fetch('https://api.twitch.tv/helix/users', {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Client-Id': twitch.clientId
    }
  });

  if (!response.ok)
    return;

  const data = await response.json();
  if (!data.data)
    return;

  if (data.data.length > 0)
    return data.data[0].login;
}
