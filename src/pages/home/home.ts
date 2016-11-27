import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

import * as _ from 'lodash'

interface IMedal {
  name: string
  icon: string
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  medals: Array<IMedal>
  medalGroup: Array<Array<IMedal>> = []

  constructor(public navCtrl: NavController) {
    this.initializeItens()
  }

  medalOrganizer(medals: Array<IMedal>) {
    let group = _.chunk(medals, 4)

    this.medalGroup = group
  }

  initializeItens() {
    this.medals = [
      { 
        name: 'Medal 1',
        icon: 'http://iconizer.net/files/Vista_Style_Base_Software/orig/Circle_Yellow.png'
      },
      { 
        name: 'Medal 2',
        icon: 'http://iconizer.net/files/Vista_Style_Base_Software/orig/Circle_Yellow.png'
      },
      { 
        name: 'Medal 3',
        icon: 'http://iconizer.net/files/Vista_Style_Base_Software/orig/Circle_Yellow.png'
      },
      { 
        name: 'Medal 4',
        icon: 'http://iconizer.net/files/Vista_Style_Base_Software/orig/Circle_Yellow.png'
      },
      { 
        name: 'Medal 5',
        icon: 'http://iconizer.net/files/Vista_Style_Base_Software/orig/Circle_Yellow.png'
      },
      { 
        name: 'Medal 6',
        icon: 'http://iconizer.net/files/Vista_Style_Base_Software/orig/Circle_Yellow.png'
      },
      { 
        name: 'Medal 7',
        icon: 'http://iconizer.net/files/Vista_Style_Base_Software/orig/Circle_Yellow.png'
      },
      { 
        name: 'Medal 8',
        icon: 'http://iconizer.net/files/Vista_Style_Base_Software/orig/Circle_Yellow.png'
      },
      { 
        name: 'Medal 9',
        icon: 'http://iconizer.net/files/Vista_Style_Base_Software/orig/Circle_Yellow.png'
      }
    ]

    this.medalOrganizer(this.medals)
  }

}
