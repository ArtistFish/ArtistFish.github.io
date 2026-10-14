"""Create the Chinese one-page resume template inspired by cv_example.jpg.

Icon placement follows https://github.com/qianxi0410/cv.typ. The monochrome
icons below are drawn with PDF vector paths, without image or icon-font assets.

Run with the bundled Python runtime. The content below is deliberately generic;
replace placeholders with verified personal information before using the CV.
"""

from pathlib import Path

from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "中文简历模板.pdf"
FONT_DIRECTORY = Path("/System/Library/Fonts/Supplemental")

pdfmetrics.registerFont(TTFont("Songti", str(FONT_DIRECTORY / "Songti.ttc"), subfontIndex=6))
pdfmetrics.registerFont(TTFont("SongtiBold", str(FONT_DIRECTORY / "Songti.ttc"), subfontIndex=1))
pdfmetrics.registerFont(TTFont("Times", str(FONT_DIRECTORY / "Times New Roman.ttf")))
pdfmetrics.registerFont(TTFont("TimesBold", str(FONT_DIRECTORY / "Times New Roman Bold.ttf")))
pdfmetrics.registerFont(TTFont("TimesItalic", str(FONT_DIRECTORY / "Times New Roman Italic.ttf")))

PAGE_WIDTH, PAGE_HEIGHT = A4
LEFT = 35.5
RIGHT = PAGE_WIDTH - LEFT
WIDTH = RIGHT - LEFT
BODY_SIZE = 10.5
LEADING = 15.5
SECTION_SIZE = 13
ITEM_SIZE = 10.5
ROLE_CENTER = LEFT + WIDTH * 0.64
LAST_BASELINE = 36
DRAWN_LINES = []
SECTION_ICONS = {
    "教育背景": "education",
    "项目经历": "project",
    "实习经历": "briefcase",
    "科研论文": "paper",
}


CONTENT = [
    ("教育背景", [
        {
            "name": "［研究生院校名称］",
            "role": "［专业名称］ · ［学位］",
            "date": "20XX.09 - 20XX.06",
            "bullets": [
                ("学业表现：", "GPA［X.XX / X.XX］，专业排名［X / XX］；研究方向为［研究领域］。"),
                ("核心课程：", "［课程一］、［课程二］、［课程三］、［课程四］；相关成绩或专业能力为［补充说明］。"),
                ("荣誉奖励：", "［奖学金或荣誉名称］（20XX 年）；［竞赛奖项或优秀学生称号］。"),
            ],
        },
        {
            "name": "［本科院校名称］",
            "role": "［专业名称］ · 学士",
            "date": "20XX.09 - 20XX.06",
            "bullets": [
                ("学业表现：", "GPA［X.XX / X.XX］，专业排名［X / XX］；主修课程包括［课程一］、［课程二］。"),
                ("荣誉奖励：", "［奖学金名称］、［竞赛奖项］；毕业设计为［课题名称］。"),
            ],
        },
    ]),
    ("项目经历", [
        {
            "name": "［项目名称一］",
            "role": "［项目角色］",
            "date": "20XX.XX - 20XX.XX",
            "bullets": [
                ("项目背景：", "面向［业务场景／目标用户］，针对［现有流程中的主要问题］，设计并实现［系统或产品］，以改善［效率／性能／体验］。"),
                ("方案实现：", "独立负责［核心模块／关键功能］，采用［技术栈／算法／工具］完成［具体实现］，并解决［主要技术难点］。"),
                ("成果验证：", "通过［测试或实验］验证方案，在［核心指标］上达到［量化结果］；项目链接为［仓库地址］。"),
            ],
        },
        {
            "name": "［项目名称二］",
            "role": "［项目角色］",
            "date": "20XX.XX - 20XX.XX",
            "bullets": [
                ("项目目标：", "围绕［研究或业务问题］，搭建［系统／平台／模型］，完成［项目交付目标］，服务于［应用场景］。"),
                ("个人贡献：", "负责［具体工作］，与［合作对象］协作完成［关键任务］；通过［技术方案］优化［原有方法］。"),
                ("项目成果：", "形成［代码／产品／报告］，实现［可验证的效果］；可补充［用户规模／性能提升／获奖情况］。"),
            ],
        },
    ]),
    ("实习经历", [
        {
            "name": "［公司名称一］",
            "role": "［部门／实习岗位］",
            "date": "20XX.XX - 20XX.XX",
            "bullets": [
                ("工作职责：", "在［部门或团队］参与［业务／研发任务］，负责［具体职责］，支持［业务目标或产品需求］。"),
                ("关键工作：", "运用［技术／工具／方法］完成［任务］，优化［工作流程或系统模块］，解决［具体问题］。"),
                ("实习成果：", "交付［功能／报告／工具］，推动［项目进展］；用［量化指标］说明［效率提升或实际价值］。"),
            ],
        },
        {
            "name": "［公司名称二］",
            "role": "［部门／实习岗位］",
            "date": "20XX.XX - 20XX.XX",
            "bullets": [
                ("主要工作：", "参与［项目或业务］，负责［个人任务］；与［团队成员］协作完成［交付内容］。"),
                ("工作成果：", "通过［具体行动］改善［原有问题］，取得［可验证的结果］，并沉淀［文档／工具／流程］。"),
            ],
        },
    ]),
    ("科研论文", [
        {
            "name": "［论文题目一］",
            "role": "［作者顺序／贡献］",
            "date": "20XX 年",
            "bullets": [
                ("发表信息：", "［作者列表］；［会议／期刊名称］，［年份］；［已发表／已录用／在投］。"),
                ("研究贡献：", "针对［研究问题］提出［核心方法］；负责［个人研究工作］，在［数据或系统］上取得［主要结果］。"),
            ],
        },
        {
            "name": "［论文题目二］",
            "role": "［作者顺序／贡献］",
            "date": "20XX 年",
            "bullets": [
                ("发表信息：", "［作者列表］；［会议／期刊名称］，［年份］；论文链接为［DOI／URL］。"),
                ("研究贡献：", "围绕［研究方向］完成［方法设计／实验评估］，验证［关键结论］；个人贡献为［具体工作］。"),
            ],
        },
    ]),
]


def font_for(character, bold=False, italic=False):
    if ord(character) < 128:
        return "TimesBold" if bold else "TimesItalic" if italic else "Times"
    return "SongtiBold" if bold else "Songti"


def glyphs(parts, size):
    result = []
    for value, bold, italic in parts:
        for character in value:
            font = font_for(character, bold, italic)
            result.append((character, font, pdfmetrics.stringWidth(character, font, size)))
    return result


def paint_line(pdf, items, x, y, size):
    if not items:
        return
    width = sum(item[2] for item in items)
    if x < LEFT - 0.1 or x + width > RIGHT + 0.1 or y < LAST_BASELINE:
        raise ValueError(f"Text falls outside the layout: x={x:.1f}, y={y:.1f}, width={width:.1f}")
    DRAWN_LINES.append((x, y, width, "".join(item[0] for item in items)))
    active_font = None
    string = ""
    position = x
    for character, font, _ in items:
        if font != active_font and string:
            pdf.setFont(active_font, size)
            pdf.drawString(position, y, string)
            position += pdfmetrics.stringWidth(string, active_font, size)
            string = ""
        active_font = font
        string += character
    if string:
        pdf.setFont(active_font, size)
        pdf.drawString(position, y, string)


def centered(pdf, parts, y, size, center=PAGE_WIDTH / 2):
    items = glyphs(parts, size)
    width = sum(item[2] for item in items)
    paint_line(pdf, items, center - width / 2, y, size)


def draw_icon(pdf, name, x, y, size):
    """Draw an original icon in a 24-unit square; y is its bottom edge."""
    pdf.saveState()
    pdf.translate(x, y)
    pdf.scale(size / 24, size / 24)
    pdf.setLineWidth(1.7)
    pdf.setLineCap(1)
    pdf.setLineJoin(1)

    def outline(points, closed=False):
        path = pdf.beginPath()
        path.moveTo(*points[0])
        for point in points[1:]:
            path.lineTo(*point)
        if closed:
            path.close()
        pdf.drawPath(path, stroke=1, fill=0)

    if name == "education":
        outline([(2, 15), (12, 20.5), (22, 15), (12, 9.5)], closed=True)
        path = pdf.beginPath()
        path.moveTo(6, 12.8)
        path.lineTo(6, 6.7)
        path.curveTo(9, 3.5, 15, 3.5, 18, 6.7)
        path.lineTo(18, 12.8)
        pdf.drawPath(path, stroke=1, fill=0)
        pdf.line(22, 15, 22, 6.5)
        pdf.circle(22, 5, 1, stroke=0, fill=1)
    elif name == "project":
        outline([(3, 4), (21, 4), (21, 17), (11, 17), (9, 20), (3, 20)], closed=True)
        outline([(8.5, 13), (6, 10.5), (8.5, 8)])
        outline([(15.5, 13), (18, 10.5), (15.5, 8)])
        pdf.line(13, 14, 11, 7)
    elif name == "briefcase":
        pdf.roundRect(2.5, 4, 19, 14, 1.7, stroke=1, fill=0)
        outline([(8, 18), (8, 21), (16, 21), (16, 18)])
        pdf.line(2.5, 12.5, 10, 12.5)
        pdf.line(14, 12.5, 21.5, 12.5)
        pdf.rect(10, 11, 4, 3, stroke=1, fill=0)
    elif name == "paper":
        outline([(5, 2), (19, 2), (19, 16), (13, 22), (5, 22)], closed=True)
        outline([(13, 22), (13, 16), (19, 16)])
        for line_y, end_x in [(12, 16), (8, 16), (4.5, 13)]:
            pdf.line(8, line_y, end_x, line_y)
    elif name == "phone":
        path = pdf.beginPath()
        path.moveTo(6, 21)
        path.lineTo(3.3, 18.3)
        path.curveTo(2, 12, 12, 2, 18.3, 3.3)
        path.lineTo(21, 6)
        path.lineTo(16.8, 10.2)
        path.lineTo(14.1, 7.5)
        path.curveTo(11, 9, 9, 11, 7.5, 14.1)
        path.lineTo(10.2, 16.8)
        path.close()
        pdf.drawPath(path, stroke=1, fill=0)
    elif name == "mail":
        pdf.roundRect(2.5, 4.5, 19, 15, 1.5, stroke=1, fill=0)
        outline([(3, 18.5), (12, 11.5), (21, 18.5)])
    elif name == "location":
        path = pdf.beginPath()
        path.moveTo(12, 2)
        path.curveTo(10.4, 4.1, 5, 10, 5, 15)
        path.curveTo(5, 19, 8.2, 22, 12, 22)
        path.curveTo(15.8, 22, 19, 19, 19, 15)
        path.curveTo(19, 10, 13.6, 4.1, 12, 2)
        path.close()
        pdf.drawPath(path, stroke=1, fill=0)
        pdf.circle(12, 15, 2.5, stroke=1, fill=0)
    elif name == "target":
        pdf.circle(12, 12, 9, stroke=1, fill=0)
        pdf.circle(12, 12, 5, stroke=1, fill=0)
        pdf.circle(12, 12, 1.2, stroke=0, fill=1)
    elif name == "website":
        pdf.circle(12, 12, 9.5, stroke=1, fill=0)
        pdf.ellipse(8, 2.5, 16, 21.5, stroke=1, fill=0)
        pdf.line(2.5, 12, 21.5, 12)
    else:
        raise ValueError(f"Unknown icon: {name}")
    pdf.restoreState()


def centered_fields(pdf, fields, y, size, bold=False):
    """Center the complete contact row, including icons and separators."""
    icon_size = size * 0.9
    icon_gap = 3
    separator = glyphs([("  |  ", False, False)], size)
    separator_width = sum(item[2] for item in separator)
    prepared = [(icon, glyphs([(text, bold, False)], size)) for icon, text in fields]
    total_width = sum(icon_size + icon_gap + sum(item[2] for item in text) for _, text in prepared)
    total_width += separator_width * (len(fields) - 1)
    x = (PAGE_WIDTH - total_width) / 2
    if total_width > WIDTH:
        raise ValueError("The contact row is too wide for the page")
    for index, (icon, text) in enumerate(prepared):
        if index:
            paint_line(pdf, separator, x, y, size)
            x += separator_width
        draw_icon(pdf, icon, x, y - 1.4, icon_size)
        x += icon_size + icon_gap
        paint_line(pdf, text, x, y, size)
        x += sum(item[2] for item in text)


def wrapped(pdf, parts, x, y, width, size, leading=LEADING):
    characters = glyphs(parts, size)
    remaining = []
    position = 0
    while position < len(characters):
        end = position + 1
        if characters[position][0] == "［":
            while end < len(characters) and characters[end - 1][0] != "］":
                end += 1
        elif characters[position][0].isascii() and characters[position][0].isalnum():
            while end < len(characters) and characters[end][0].isascii() and characters[end][0].isalnum():
                end += 1
        token = characters[position:end]
        if sum(item[2] for item in token) > width:
            remaining.extend([[item] for item in token])
        else:
            remaining.append(token)
        position = end
    lines = []
    line = []
    line_width = 0
    closing = "，。；：！？、）］】》”’"
    opening = "（［【《“‘"
    for token in remaining:
        token_width = sum(item[2] for item in token)
        if line and line_width + token_width > width:
            if token[0][0] in closing or line[-1][-1][0] in opening:
                moved = line.pop()
                if line:
                    lines.append(line)
                line = [moved]
                line_width = sum(item[2] for item in moved)
            else:
                lines.append(line)
                line = []
                line_width = 0
        line.append(token)
        line_width += token_width
    if line:
        lines.append(line)
    if len(lines) > 1:
        last_width = sum(item[2] for token in lines[-1] for item in token)
        previous_width = sum(item[2] for token in lines[-2] for item in token)
        while last_width < width * 0.26 and len(lines[-2]) > 1:
            moved = lines[-2][-1]
            moved_width = sum(item[2] for item in moved)
            if previous_width - moved_width < width * 0.58:
                break
            lines[-2].pop()
            lines[-1].insert(0, moved)
            previous_width -= moved_width
            last_width += moved_width
        while lines[-1][0][0][0] in closing and len(lines[-2]) > 1:
            lines[-1].insert(0, lines[-2].pop())
    for index, tokens in enumerate(lines):
        items = [item for token in tokens for item in token]
        paint_line(pdf, items, x, y - index * leading, size)
    return y - len(lines) * leading


def section_heading(pdf, title, y):
    draw_icon(pdf, SECTION_ICONS[title], LEFT, y - 2.8, 14)
    paint_line(pdf, glyphs([(title, True, False)], SECTION_SIZE), LEFT + 20, y, SECTION_SIZE)
    pdf.setLineWidth(0.55)
    pdf.line(LEFT, y - 5, RIGHT, y - 5)
    return y - 20


def entry(pdf, item, y):
    left_bottom = wrapped(pdf, [(item["name"], True, False)], LEFT, y, WIDTH * 0.49, ITEM_SIZE, 13)
    centered(pdf, [(item["role"], False, True)], y, ITEM_SIZE, ROLE_CENTER)
    date = glyphs([(item["date"], False, True)], ITEM_SIZE)
    paint_line(pdf, date, RIGHT - sum(value[2] for value in date), y, ITEM_SIZE)
    y = min(left_bottom, y - 13)
    for label, value in item["bullets"]:
        pdf.circle(LEFT + 3, y + 3.2, 1.3, stroke=0, fill=1)
        y = wrapped(pdf, [(label, True, False), (value, False, False)], LEFT + 20, y, WIDTH - 20, BODY_SIZE)
    return y - 7


def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    pdf.setTitle("中文简历模板")
    pdf.setAuthor("")
    pdf.setSubject("教育背景 项目经历 实习经历 科研论文")
    pdf.setCreator("Chinese resume template")
    pdf.setFillColorRGB(0, 0, 0)
    pdf.setStrokeColorRGB(0, 0, 0)

    centered(pdf, [("姓 名", True, False)], PAGE_HEIGHT - 57, 18)
    centered_fields(pdf, [
        ("phone", "电话：［填写手机号］"),
        ("mail", "邮箱：［填写邮箱］"),
    ], PAGE_HEIGHT - 75, 10.5, bold=True)
    centered_fields(pdf, [
        ("location", "所在地：［城市］"),
        ("target", "求职意向：［目标岗位］"),
        ("website", "个人主页：［链接］"),
    ], PAGE_HEIGHT - 91, 10.2)

    y = PAGE_HEIGHT - 108
    for index, (title, items) in enumerate(CONTENT):
        if index:
            y -= 9
        y = section_heading(pdf, title, y)
        for item in items:
            y = entry(pdf, item, y)

    if y < LAST_BASELINE - 7:
        raise ValueError(f"Content is too long for one A4 page; final y={y:.1f}")
    pdf.showPage()
    pdf.save()
    print(f"Created: {OUTPUT}")
    print(f"Lowest text baseline: {min(value[1] for value in DRAWN_LINES):.1f} pt")
    print(f"Text lines: {len(DRAWN_LINES)}")


if __name__ == "__main__":
    main()
