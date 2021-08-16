import React, { Component } from 'react'
import './BannerTwitch.css'
import img1 from './img/twitch_letras.png'
import img2 from './img/kuma_twitch.png'

export default class BannerTwitch extends Component {
    render() {
        return (
            <div id="twitch_banner">
                <svg class="twitch_rectangle">
                    <rect id="twitch_rectangle" rx="0" ry="0" x="0" y="0" width="1364" height="79">
                    </rect>
                </svg>
                <img id="twitch_letras" src={img1} alt="TWITCH"></img>

                <div id="logo_twitch">
                    <svg class="Trazado_4" viewBox="1962.668 1714.928 54.828 60.584">
                        <path id="Trazado_4" d="M 1962.667724609375 1717.655029296875 L 1962.667724609375 1765.819213867188 L 1974.784423828125 1765.819213867188 L 1975.99609375 1775.512329101562 L 1985.76953125 1767.030639648438 L 2000.229248046875 1765.819213867188 L 2011.437744140625 1759.154907226562 L 2017.49609375 1751.278930664062 L 2017.49609375 1716.443359375 L 1963.879150390625 1714.928466796875 L 1962.667724609375 1717.655029296875 Z">
                        </path>
                    </svg>
                    <div id="Icon_zocial-twitch">
                        <svg class="Trazado_2" viewBox="0.788 0 64.486 67.437">
                            <path id="Trazado_2" d="M 5.18351936340332 0 L 0.7875000238418579 11.7297420501709 L 0.7875000238418579 58.64027786254883 L 16.90483283996582 58.64027786254883 L 16.90483283996582 67.4365234375 L 25.70529747009277 67.4365234375 L 34.49311828613281 58.63606262207031 L 47.68539047241211 58.63606262207031 L 65.27368927001953 41.0519905090332 L 65.27368927001953 0 L 5.187734127044678 0 Z M 11.04206848144531 5.858549118041992 L 59.41512680053711 5.858549118041992 L 59.41512680053711 38.11428451538086 L 49.15212631225586 48.37728500366211 L 33.03059005737305 48.37728500366211 L 24.24276733398438 57.16510009765625 L 24.24276733398438 48.37728500366211 L 11.04206848144531 48.37728500366211 L 11.04206848144531 5.858549118041992 Z">
                            </path>
                        </svg>
                        <svg class="Trazado_3" viewBox="14.873 9.394 21.976 17.588">
                            <path id="Trazado_3" d="M 14.87250137329102 26.98204231262207 L 20.73105049133301 26.98204231262207 L 20.73105049133301 9.39375114440918 L 14.87250137329102 9.39375114440918 L 14.87250137329102 26.98204231262207 Z M 30.98983192443848 26.98204231262207 L 36.84838104248047 26.98204231262207 L 36.84838104248047 9.39375114440918 L 30.98983192443848 9.39375114440918 L 30.98983192443848 26.98204231262207 Z">
                            </path>
                        </svg>
                    </div>
                </div>
                <img id="kuma_twitch" src={img2} alt="IconoKuma"></img>
            </div>
        )
    }
}
