import {useEffect, useState} from 'react';
import {Powerstats} from '../interfaces/interfaces';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export default function useStats() {
  const myTeam = useSelector((state: RootState) => state.heros.myTeam);

  const [teamPowerstats, setTeamPowerstats] = useState<Powerstats>(
    {} as Powerstats,
  );

  function getTeamStats() {
    let powerstats: Powerstats = {
      combat: '0',
      durability: '0',
      intelligence: '0',
      power: '0',
      speed: '0',
      strength: '0',
    };
    myTeam.forEach(item => {
      powerstats.combat = String(
        parseInt(powerstats.combat) + parseInt(item.powerstats.combat),
      );
      powerstats.durability = String(
        parseInt(powerstats.durability) + parseInt(item.powerstats.durability),
      );
      powerstats.intelligence = String(
        parseInt(powerstats.intelligence) +
          parseInt(item.powerstats.intelligence),
      );
      powerstats.power = String(
        parseInt(powerstats.power) + parseInt(item.powerstats.power),
      );
      powerstats.speed = String(
        parseInt(powerstats.speed) + parseInt(item.powerstats.speed),
      );
      powerstats.strength = String(
        parseInt(powerstats.strength) + parseInt(item.powerstats.strength),
      );
    });

    return powerstats;
  }

  useEffect(() => {
    setTeamPowerstats(getTeamStats());
  }, [myTeam]);

  return teamPowerstats;
}
