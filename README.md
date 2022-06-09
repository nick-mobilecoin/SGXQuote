# Okteta SGX Quote binary struct

Provides the binary struct format of an SGX Quote 
[Appendix A](https://download.01.org/intel-sgx/latest/dcap-latest/linux/docs/Intel_SGX_ECDSA_QuoteLibReference_DCAP_API.pdf)
for use with [Okteta](https://apps.kde.org/okteta/).

Clone this to `~/oktet/structures/SGXQuote`.
If you happen to use snaps it may need to be in
`~/snap/okteta/15/.local/share/okteta/structures/SGXQuote`.

# Findings

It looks like some of the Okteta documentation is either incorrect, or this
author just failed to retain correctly:
* The file names do not need to be the same as the directory name.  Most
  examples show `main.osd` as well as `main.js`.  The desktop file is also shown
  in many repositories as `metadata.desktop`
* I was unable to get arrays working on the XML format.  Not what it was
  just punted to js.


# References

* https://tetzank.github.io/posts/structure-definitions-for-binary-files/
* https://docs.kde.org/trunk5/en/okteta/okteta/
* https://userbase.kde.org/Okteta/Writing_structure_definitions
