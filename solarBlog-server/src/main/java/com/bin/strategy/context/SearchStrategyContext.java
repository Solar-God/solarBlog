package com.bin.strategy.context;

import com.bin.dto.ArticleSearchDTO;
import com.bin.enums.SearchModeEnum;
import com.bin.strategy.SearchStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * 搜索策略上下文
 *
 * @author bin
 * @date 2021/07/27
 */
@Service
public class SearchStrategyContext {
    /**
     * 搜索模式
     */
    @Value("${search.mode}")
    private String searchMode;

    @Autowired
    private Map<String, SearchStrategy> searchStrategyMap;

    /**
     * 执行搜索策略
     *
     * @param keywords 关键字
     * @return {@link List< ArticleSearchDTO >} 搜索文章
     */
    public List<ArticleSearchDTO> executeSearchStrategy(String keywords) {
        return searchStrategyMap.get(SearchModeEnum.getStrategy(searchMode)).searchArticle(keywords);
    }

}
