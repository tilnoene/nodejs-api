import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";
import { Survey } from "../models/Survey";

@EntityRepository(Survey)
class SurveysRepository extends Repository<User> {

}

export { SurveysRepository };
