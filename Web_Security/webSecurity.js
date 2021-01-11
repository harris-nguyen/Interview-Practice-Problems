// https://medium.com/free-code-camp/a-quick-introduction-to-web-security-f90beaf4dd41

// - Cross-Origin Resource Sharing (CORS)/authentication cookies
//     In a CORS world, Facebook would only allow requests with an origin of facebook.com
//       to edit data on their server. In other words, they would limit cross-origin resource sharing
//     In a no-CORS world, they could make changes to your account without you even knowing.

// - Content Security Policy (CSP) within the header
//     Restricts unneccessary files, code, etc to update
//     Protects from... example, someone got into your system and changes your website's layout by inputing JS, make HTTP request, etc
//     If no CSP header is present, then everything goes, and nothing is restricted.

// - HTTPS or HTTP Secure
//     HTTPS is encrypted and HTTP is not.
//     If you are using public Wi-Fi with no password at a coffee shop, it’s pretty easy
//     for someone to act like your router, so that all requests and responses go through them.
//     If your data is not encrypted, then they can do whatever they want with it.
//     They can edit the HTML, CSS, or JavaScript before it even gets to your browser.
//     Given what we know about XSS, you can imagine how bad this could be.

// - HTTP Strict-Transport-Security (HSTS)
//     strict-transport-security: max-age=15552000; preload ===> max-age specifies how long a browser should remember to force the user to access a website using HTTPS.
//     ^ This header only applies if you accessed the site using HTTPS.
//       If you accessed the site via HTTP,
//       the header is ignored. The reason is that, quite simply, HTTP is so insecure that it can’t be trusted.
//       Let’s use the Facebook example to further illustrate how this is helpful in practice. You are accessing
//       facebook.com for the first time, and you know HTTPS is safer than HTTP, so you access it over HTTPS,
//       https://facebook.com. When your browser receives the HTML, it receives the header above which tells
//       your browser to force-redirect you to HTTPS for future requests. One month later, someone sends you a
//       link to Facebook using HTTP, http://facebook.com, and you click on it. Since one month is less than the
//       15552000 seconds specified by the max-age directive, your browser will send the request as HTTPS,
//       preventing a potential MITM (Man in the Middle) attack.
