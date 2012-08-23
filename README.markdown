PrivaSee
===============================

This project aims to help users know when unencrypted data is being sent over the network. More specifically, the user is made aware of unintenional use of HTTP.

The current implementation is a rough proof-of-concept and barely usable for someone who has no idea what this is all about (lacking documentation and user guidance).

Current features:
- Warning for password fields on HTTP websites (shown on focus)
- "Safe Mode" blocking all (!) HTTP connections

Latter desperately needs things like white- and blacklisting of domains and a explanation of what's going on in case of a cancelled connection.

Other, possible features:
- block HTTP websites only if they attempt to send / set a cookie
- block external scripts on websites with a password field
- security tips for users (explanation of what it means not to encrypt connections, etc)
- alert / block cookies on HTTP websites
- security ranking for websites, including link and rating of TOS (PrivacyParrot.com, PrivacyScore.com, TOSDR.it)
- love?

Usage
-------

- install extension
- visit http://www.facebook.com (don't forget to log out first and take care not to visit https://...)
- click in the password field: warning dialog appears
- click extension icon in the upper right (enables Safe Mode)
- reload http://www.facebook.com: doesn't work, because no HTTP connection is allowed

License
-------

The license for this extension can be found in the [LICENSE.markdown][4] file.

_Contest entries must be either [BSD][1], [MIT][2], or [Apache2][3] licensed.
Please adjust the [LICENSE.markdown][4] file to taste._

[1]: http://opensource.org/licenses/BSD-3-Clause
[2]: http://opensource.org/licenses/mit-license.html
[3]: http://www.apache.org/licenses/LICENSE-2.0.html
[4]: https://github.com/mikewest/ExtensionHackathonBoilerplate/blob/master/LICENSE.markdown

Authors
-------

* Thomas Tascheur: http://tomtasche.at/
* Dominic Bartl: http://bartinger.at/
