import React from 'react';
import './Menu.scss';

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__main">
        <li>Home</li>
        <li>
          Learn
          <ul className="menu__main__submenu">      
            <li><a href="https://peercoin.github.io/PeercoinUniversity/" class="submenu">Peercoin University</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/2-what-is-a-blockchain-" class="submenu">What is a Blockchain?</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/6-centralization-of-bitcoin" class="submenu">Inherent Centralization of Proof-of-Work Blockchains</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/9-peercoin-proof-of-stake-consensus" class="submenu">Peercoin &amp; Proof-of-Stake Consensus</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/10-first-efficient-sustainable-blockchain" class="submenu">Efficient &amp; Sustainable Security</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/11-economics-of-peercoin" class="submenu">Economics of Peercoin</a></li>
            <li><a href="https://peercoin.github.io/PeercoinUniversity/#/12-scalability-of-peercoin-" class="submenu">Scalability of Peercoin</a></li>
            <li><a href="https://medium.com/peercoin/deflation-and-cryptocurrencies-the-long-term-ramifications-of-fixed-supply-currencies-c192f44dddc1" class="submenu">Deflation and Cryptocurrencies</a></li>
            <li><a href="https://medium.com/peercoin/peercoins-hybrid-chain-solution-to-proof-of-work-global-scaling-and-environmental-impact-c36757e89d6e" class="submenu">Peercoin's Hybrid Chain Solution</a></li>
            <li><a href="https://medium.com/peercoin/the-rich-get-richer-concept-in-proof-of-stake-systems-82c5ceeff326" class="submenu">"Rich get Richer" Fallacy</a></li>
            <li><a href="https://docs.peercoin.net/#/frequently-asked-questions" class="submenu">Frequently Asked Questions</a></li>
          </ul>
        </li>
        <li>Get Started</li>
        <li>Resources</li>
        <li>Project</li>
        <li>Wallet</li>
        <li>Community</li>
      </ul>
    </nav>
  );
}

export default Menu;
