from pydantic import BaseModel
from pydantic import BaseModel

class SkillBase(BaseModel):
    name: str


class Skill(SkillBase):
    id: int
    class Config:
        orm_mode = True


class SkillUpdate(BaseModel):
    pass
